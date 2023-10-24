const db = require('../connection');

const createQuiz = (input) => { //writes question
  return db.query(`
  INSERT INTO quizzes(title, description, private, owner_id)
  VALUES($1, $2, $3, $4)
  `,
  [title, description, private, owner_id])
    .then(data => {
      return data;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { createQuiz };