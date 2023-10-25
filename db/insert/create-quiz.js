const e = require('express');
const db = require('../connection');

const createQuiz = (input) => { //writes question

  const {title, description, userId} = input;
  const private = Boolean(input.private);

  console.log('in INSERT', private)

  return db.query(`
  INSERT INTO quizzes(title, description, owner_id, private)
  VALUES($1, $2, $3, $4)
  RETURNING *;
  `,
  [title, description, userId, private])
    .then(data => {
      console.log(data.rows)
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { createQuiz };