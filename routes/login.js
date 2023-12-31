const express = require('express');
const router = express.Router();
const db = require('../db/queries/login');
const bcrypt = require("bcryptjs");


// router.get('/', (req, res) => {
//   const templateVars = { user: db.getUserWithId(req.session.userId) };
//   // const isAuthenticated = req.session.userId ? true : false;

//   if (req.session.userId) {
//     return res.redirect("/quizzes");
//   }

//   console.log("templateVars data: ", templateVars);
//   // res.json({ isAuthenticated });
//   res.render('login', templateVars);
// });

router.get('/', (req, res) => {
  const user = db.getUserWithId(req.session.userId);
  const templateVars = { user: user };

  if (req.session.userId) {
    return res.redirect("/");
  }

  console.log("templateVars data: ", templateVars);
  res.render('login', templateVars);
});

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.getUserWithEmail(email).then((user) => {

    if (!user) {
      return res.send({ error: "no user with that id" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.send({ error: "password invalid" });
    }

    req.session.userId = user.id;
    res.redirect('/'); // to public homepage
  });
});

module.exports = router;