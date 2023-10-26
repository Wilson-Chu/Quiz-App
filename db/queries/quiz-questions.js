const db = require('../connection');

const getQuizById = (id) => {
  return db.query(`
  SELECT question, answer, option_1, option_2, option_3
  FROM quizzes
  JOIN questions ON quiz_id = quizzes.id
  WHERE url_id = $1
  `,
  [id])
    .then(data => {
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { getQuizById };