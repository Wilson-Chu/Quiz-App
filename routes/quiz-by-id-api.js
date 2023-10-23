const express = require('express');
const router  = express.Router();
const db = require('../db/queries/quiz-questions');

router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log(id);

  db.getQuizById(id)
    .then(data => {
      console.log(data.rows)
      const quiz = data.rows
      res.json(quiz)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

module.exports = router;