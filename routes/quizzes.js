const express = require('express');
const router = express.Router();
const db = require('../db/queries/quizzes');
const dbUser = require('../db/queries/login');
const bcrypt = require("bcryptjs");
const { requireAuth } = require('../public/scripts/isAuthenticated');

// router.use(requireAuth); // protected router

router.get('/', requireAuth, (req, res) => { // protected route
  console.log("abdoosd", req.session.userId);
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };


  // pass templateVars along with 'quiz-show' to get _nav.ejs working
  res.render('my-quizzes', templateVars);
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