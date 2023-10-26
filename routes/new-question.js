const express = require('express');
const router = express.Router();
const db = require('../db/insert/add-questions');
const { requireAuth } = require('../public/scripts/isAuthenticated');

router.use(requireAuth); // protected router

router.get('/:id', (req, res) => {
  const templateVars = { quizId: req.params.id };
  res.render('new-question', templateVars);
});

router.post('/:id', (req, res) => {
  const id = req.params.id;
  let data = req.body
  data.quizId = id

  db
    .addQuestions(data)
    .then(res.redirect(`/edit/${id}`));

});

module.exports = router;