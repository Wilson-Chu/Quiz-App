const express = require('express');
const router = express.Router();
const db = require('../db/queries/quizzes');
const dbUser = require('../db/queries/login');
const bcrypt = require("bcryptjs");
const { requireAuth } = require('../public/scripts/isAuthenticated');

// router.use(requireAuth); // protected router

router.get('/', requireAuth, (req, res) => { // protected route
  console.log("abdoosd");
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };

  // pass templateVars along with 'quiz-show' to get _nav.ejs working
  res.render('index', templateVars);
});

router.get('/:id', (req, res) => { // quiz public if user knows id (shareable)
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };

  res.render('quiz-show', templateVars);
});

module.exports = router;