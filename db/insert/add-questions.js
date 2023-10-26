const db = require('../connection');

const addQuestions = (input) => { //writes question
  
  const { id, question, answer, option1, option2, option3 } = input;
  console.log('input: ', input);

  return db.query(`
  INSERT INTO questions(quiz_id ,question, answer, option_1, option_2, option_3)
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *
  `,
  [ id, question, answer, option1, option2, option3 ])
    .then(data => {
      console.log(data.rows)
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { addQuestions };