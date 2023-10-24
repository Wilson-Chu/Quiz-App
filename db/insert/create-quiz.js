const e = require('express');
const db = require('../connection');

const createQuiz = (input) => { //writes question

  const {title, description, userId} = input;

  return db.query(`
  INSERT INTO quizzes(title, description, owner_id)
  VALUES($1, $2, $3)
  RETURNING *;
  `,
  [title, description, userId])
    .then(data => {
      console.log(data.rows)
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { createQuiz };