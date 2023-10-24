const express = require('express');
const router = express.Router();
const db = require('../db/insert/new-result');

router.get('/', (req, res) => {
  res.render('results');
});
router.get('/:id', (req, res) => {
  res.render('results_id');
});
router.post('/', (req, res) => {
  const score = req.body.score;
  const contestant_id = req.session.id || 3;
  const quiz_id = 3;
  const data = { score, contestant_id, quiz_id };

  db.submitResult(data)
    .then((data) => {
      const id = data[0].id
      res.redirect(`/results/${id}`)
    })
});

module.exports = router;