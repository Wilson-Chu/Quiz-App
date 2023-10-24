const express = require('express');
const router  = express.Router();
const db = require('../db/insert/create-quiz');

router.get('/', (req, res) => {
  res.render('new-quiz');
});

// router.get('/:id', (req, res) => {
//   const templateVars = { quizId: req.params.id }
//   console.log(templateVars)
//   res.render('new-question', templateVars);
// });

router.post('/', (req, res) => {

  db
    .createQuiz(req.body)
    .then((data) => {
      id = data[0].id
      return id;
    })
    .then((id) => res.redirect(`/edit/${id}`));
  
});

module.exports = router;