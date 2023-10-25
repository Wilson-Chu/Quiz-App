const express = require('express');
const router = express.Router();
const dbInsert = require('../db/insert/new-result');
const dbUser = require('../db/queries/login');

const dbQuery = require('../db/queries/quizzes');


router.get('/', (req, res) => {
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };
  
  res.render('results',templateVars);
});
router.get('/:id', (req, res) => {
  const templateVars = { user: dbUser.getUserWithId(req.session.userId) };

  res.render('results_id',templateVars);
});
router.post('/', (req, res) => {

  const urlID = req.body.urlID;
  console.log('before' + typeof req.body.urlID);
  console.log('After' + typeof urlID);

  let quizID = null;
  const score = req.body.score;
  const contestant_id = req.session.id || 3;


  dbQuery.getQuizByUrlID(urlID)
    .then((data) => {
      quizID = data[0].id;
      const resultData = { score, contestant_id, quizID };
      return resultData;
    })
    .then((resultData) => {
      dbInsert.submitResult(resultData)
        .then((data) => {
          const id = data[0].id;
          res.redirect(`/results/${id}`);
        });
    })
    .catch(err => console.log(err.message));

});

module.exports = router;