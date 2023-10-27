const express = require('express');
const router = express.Router();
const db = require('../db/queries/results');

router.get('/', (req, res) => {
  const userID = req.session.userId;
  db.getResultsByUser(userID)
    .then(result => {
      const resultData = result;
      res.json(resultData);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.getResultsByID(id)
    .then(result => {
      const resultData = result;
      res.json(resultData);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;