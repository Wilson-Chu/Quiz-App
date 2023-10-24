const db = require('../connection');

const addQuestion = (input) => { //writes question
  return db.query(`
  INSERT INTO questions(quiz_id ,question, answer, option_1, option_2)
  VALUES($1, $2, $3, $4, $5, $6)
  `,
  [quizId, question, answer, option1, option2, option3])
    .then(data => {
      return data;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { addQuestion };