const express = require('express');
const router = express.Router();
const db = require('../db/queries/login');


router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email)
  db.getUserWithEmail(email).then((user) => {
    console.log(user)
    if (!user) {
      return res.send({ error: "no user with that id" });
    }

    // if (!bcrypt.compareSync(password, user.password)) {
    //   return res.send({ error: "error" });
    // }

    if ((password !== user.password)) {
      return res.send({ error: "error" });
    }


    // req.session.userId = user.id;
    res.redirect('/quizzes');
  });
});

module.exports = router;
