const express = require('express');
const router  = express.Router();
const db = require('../db/queries/quizzes');

router.get('/', (req, res) => {
  res.render('quiz-show')
});

module.exports = router;