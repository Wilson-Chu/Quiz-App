const express = require('express');
const router  = express.Router();
const db = require('../db/insert/create-quiz');

router.get('/', (req, res) => {
  res.render('new-quiz')
});

router.get('/:id', (req, res) => {
  res.render('new-question')
});

router.post('/', (req, res) => {
 
  let id;
  
  console.log(req.body)
  db
    .createQuiz(req.body)
    .then((data) => {
      id = data[0].id
      return id;
    })
    .then((id) => res.redirect(`/new/${id}`))
  
});

module.exports = router;