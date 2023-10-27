const express = require('express');
const router = express.Router();
const db = require('../db/insert/add-questions');
const dbQuery = require('../db/queries/quizzes');

const { requireAuth } = require('../public/scripts/isAuthenticated');

router.use(requireAuth); // protected router

router.get('/:id', (req, res) => {
  const templateVars = { quizId: req.params.id };
  res.render('new-question', templateVars);
});

router.post('/:id', (req, res) => {
  const id = req.params.id;
  let data = req.body;
  
  dbQuery
    .getQuizByUrlID(id)
    .then(result => {
      data.id = result[0].id;
      return (data);
    })
    .then((data) => {
      console.log('x', data);
      return db.addQuestions(data);
    })
    // .then(returnedData => {console.log(returnedData + "HERE")})
    .then(res.redirect(`/quizzes/edit/${id}`));

});

module.exports = router;