const express = require('express');
const router = express.Router();
const db = require('../db/queries/quizzes');
const dbUser = require('../db/queries/login');
const { generateRandomString } = require('../helpers');
const dbInsert = require('../db/insert/create-quiz');
const bcrypt = require("bcryptjs");
const { requireAuth } = require('../public/scripts/isAuthenticated');

// router.use(requireAuth); // protected router

router.get('/', requireAuth, (req, res) => { // protected route
  console.log("abdoosd", req.session.userId);
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };


  // pass templateVars along with 'quiz-show' to get _nav.ejs working
  res.render('my-quizzes', templateVars);
});
router.get('/new', (req, res) => {
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };
  res.render('new-quiz', templateVars);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.getQuizByUrlID(id)
    .then((quizID) => {

      db.getQuestionsByUrlId(quizID[0].url_id)
      .then(data => {
          console.log(data.rows);
          res.render('quiz-show', data.rows);
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

router.get('/new/:id', (req, res) => {
  const templateVars = { quizId: req.params.id };
  console.log(templateVars);
  res.render('new-question', templateVars);
});

router.post('/new', (req, res) => {

  const data = req.body;
  data.userId = req.session.userId;

  data.urlID = generateRandomString(7);


  dbInsert
    .createQuiz(data)
    .then((data) => {
      id = data[0].url_id;
      console.log(id);
      return id;
    })
    .then((id) => res.redirect(`/edit/${id}`));

});

// router.get('/:id', (req, res) => { // quiz public if user knows id (shareable)
//   const templateVars = { user: dbUser.getUserWithId(req.session.userId) };

//   res.render('quiz-show', templateVars);
// });

// router.get('/byid', (req, res) => { // quiz public if user knows id (shareable)
//   const templateVars = { user: dbUser.getUserWithId(req.session.userId) };
//   console.log('PASSING THROUGH')
//   // res.render('quiz-show', templateVars);
//   db.getQuizByUserId(req.session.userId)
//     .then(result => {
//       console.log(result);
//       res.json(result);
//     });
// });

module.exports = router;