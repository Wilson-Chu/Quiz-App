const express = require('express');
const router = express.Router();
const db = require('../db/insert/add-questions');
const dbQuery = require('../db/queries/quizzes');

const { requireAuth } = require('../public/scripts/isAuthenticated');

router.use(requireAuth); // protected router

router.get('/:id', (req, res) => {
  const templateVars = { quizId: req.params.id };
  res.render('new-question', templateVars);
});

router.post('/:id', (req, res) => {
  const id = req.params.id;
  let data = req.body


  db
    .addQuestions(data)
    .then(returnedData => {console.log(returnedData + "HERE")})
    .then(res.redirect(`/edit/${id}`));

});

module.exports = router;