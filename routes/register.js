const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../helpers');
const dbUsers = require('../db/queries/users');
const dbNewUser = require('../db/queries/newUser');
const dbLogin = require('../db/queries/login');
const bcrypt = require("bcryptjs");

const users = dbUsers.getUsers();

router.get('/', (req, res) => {
  const templateVars = { user: authenticateUser(req.session.userId, users) };

  if (req.session.userId) {
    return res.redirect("/"); // to public homepage
  }

  res.render("register", templateVars);
});

router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('Invalid information - please provide email or password');
  }

  // from DB query
  if (dbLogin.getUserWithEmail(email)) {
    return res.status(400).send("Email already taken. Please try another one.");
  }

  // ADD NEW USER AND INFO TO PSQL DATABASE
  dbNewUser.createNewUser({ username: username, email: email, password: bcrypt.hashSync(password, 10) });

  // retrieving the userId of new user (from DB query)
  // req.session.userId = dbLogin.getUserWithEmail(email).id;

  res.redirect("/login"); // back to login
});

module.exports = router;