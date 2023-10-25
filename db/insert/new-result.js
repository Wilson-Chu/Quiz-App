const db = require('../connection');

const submitResult = (input) => { //writes question

  const {score,contestant_id,quizID} = input;

  return db.query(`
  INSERT INTO results(quiz_id, contestant_id, result)
  VALUES($1, $2, $3)
  RETURNING id;
  `,
  [quizID,contestant_id,score])
    .then(data => {
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { submitResult };