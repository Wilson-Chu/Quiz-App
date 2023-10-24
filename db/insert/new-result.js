const db = require('../connection');

const submitResult = (input) => { //writes question

  const {score,contestant_id,quiz_id} = input;

  return db.query(`
  INSERT INTO results(quiz_id, contestant_id, result)
  VALUES($1, $2, $3)
  RETURNING id;
  `,
  [quiz_id,contestant_id,score])
    .then(data => {
      console.log(data.rows)
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { submitResult };