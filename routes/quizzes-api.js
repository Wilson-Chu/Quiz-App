const express = require('express');
const router = express.Router();
const db = require('../db/queries/quizzes');

router.get('/', (req, res) => {
  db.getAllPublicQuizzes()
    .then(data => {
      const quizData = data.rows;
      res.json(quizData);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/byid', (req, res) => { // quiz public if user knows id (shareable)
  const templateVars = { user: db.getUserWithId(req.session.userId) };
  console.log('PASSING THROUGH');
  // res.render('quiz-show', templateVars);
  db.getQuizByUserId(req.session.userId)
    .then(result => {
      console.log(result);
      res.json(result);
    });
});

module.exports = router;