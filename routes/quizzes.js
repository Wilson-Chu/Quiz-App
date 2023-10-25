const express = require('express');
const router = express.Router();
const db = require('../db/queries/quizzes');
const dbUser = require('../db/queries/login');
const bcrypt = require("bcryptjs");

router.get('/', (req, res) => {
  console.log("abdoosd");
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };

  // pass templateVars along with 'quiz-show' to get _nav.ejs working ???
  res.render('quiz-show', templateVars);
});

router.get('/:id', (req, res) => {
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };

  res.render('quiz-show',templateVars)
});

module.exports = router;