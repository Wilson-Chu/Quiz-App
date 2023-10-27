// const express = require('express');
// const router  = express.Router();
// const db = require('../db/insert/create-quiz');
// const dbUser = require('../db/queries/login');
// const {generateRandomString} = require('../helpers');
// const { requireAuth } = require('../public/scripts/isAuthenticated');

// router.use(requireAuth); // protected router


// router.get('/', (req, res) => {
//   const templateVars = { user: dbUser.getUserWithId(req.session.userId) };
//   res.render('new-quiz',templateVars);
// });

// router.get('/:id', (req, res) => {
//   const templateVars = { quizId: req.params.id }
//   console.log(templateVars)
//   res.render('new-question', templateVars);
// });

// router.post('/', (req, res) => {

//   const data = req.body
//   data.userId = req.session.userId
  
//   data.urlID = generateRandomString(7)


//   db
//     .createQuiz(data)
//     .then((data) => {
//       id = data[0].url_id
//       console.log(id)
//       return id;
//     })
//     .then((id) => res.redirect(`/edit/${id}`));
  
// });

// module.exports = router;