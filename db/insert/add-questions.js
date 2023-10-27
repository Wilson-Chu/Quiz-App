const db = require('../connection');

const addQuestions = (input) => { //writes question
  
  let { id, question, answer, option1, option2, option3 } = input;
  console.log('input: ', input);

  if (option2 === "") {
    option2 = null;
  }
  
  if (option3 === "") {
    option3 = null;
  }

  return db.query(`
  INSERT INTO questions(quiz_id ,question, answer, option_1, option_2, option_3)
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *
  `,
  [ id, question, answer, option1, option2, option3 ])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

module.exports = { addQuestions };