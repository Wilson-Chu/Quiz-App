const express = require('express');
const router  = express.Router();
const db = require('../db/queries/quizzes');
const dbQuery = require('../db/queries/quiz-questions');



router.get('/:id', (req, res) => {
  const id = req.params.id

  db.getQuizByUrlID(id)
    .then(quizID => {
      dbQuery.getQuizById(quizID)
      .then(response => {

        res.json(response)
      })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

module.exports = router;