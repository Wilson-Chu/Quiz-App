const db = require('../connection');

const addQuestions = (input) => { //writes question
  
  const { quizId, question, answer, option1, option2, option3 } = input;

  return db.query(`
  INSERT INTO questions(quiz_id ,question, answer, option_1, option_2, option_3)
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *`,
  [ quizId, question, answer, option1, option2, option3 ])
    .then(data => {
      console.log(data.rows)
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { addQuestions };