const express = require('express');
const router  = express.Router();
const db = require('../db/queries/quizzes');

router.get('/', (req, res) => {
  db.getAllPublicQuizzes()
    .then(data => {
      const quizData = data.rows
      res.json( quizData );
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;