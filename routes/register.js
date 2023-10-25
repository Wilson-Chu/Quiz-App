const express = require('express');
const router = express.Router();
const { authenticateUser, getUserByEmail, generateRandomString } = require('../helpers');
const dbUsers = require('../db/queries/users');
const dbNewUser = require('../db/queries/newUser');
const dbLogin = require('../db/queries/login');
const bcrypt = require("bcryptjs");

const users = dbUsers.getUsers();

router.get('/', (req, res) => {
  const templateVars = { user: authenticateUser(req.session.userId, users) };
  // const isAuthenticated = req.session.userId ? true : false;

  if (req.session.userId) {
    return res.redirect("/quizzes");
  }

  // res.json({ isAuthenticated });
  res.render("register", templateVars);
});

router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('Invalid information - please provide email or password');
  }

  // from helpers
  if (getUserByEmail(email, users)) {
    return res.status(400).send("Email already taken. Please try another one.");
  }

  console.log('congrats you made a new user!'); // only for testing
  // ADD NEW USER AND INFO TO PSQL DATABASE
  dbNewUser.createNewUser({ username: username, email: email, password: bcrypt.hashSync(password, 10) });

  // retrieving the userId of new user (from DB query)
  req.session.userId = dbLogin.getUserWithEmail(email).id;

  res.redirect("/quizzes");
});

module.exports = router;