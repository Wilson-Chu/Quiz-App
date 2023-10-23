const db = require('../connection');

const getQuizById = (id) => {
  return db.query(`
  SELECT question, answer, option_1, option_2
  FROM quizzes
  JOIN questions ON quiz_id = quizzes.id
  WHERE quiz_id = $1
  `,
  [id])
    .then(data => {
      return data;
    })
    .catch(err => {console.log(err.message)})
};

// const getQuestionsByQuizId = (id) => {
//   return db.query(`
//   SELECT question, answer, option_1, option_2
//   FROM questions
//   WHERE quiz_id = $1`,
//   [id])
//     .then(data => {
//       return data;
//     })
//     .catch(err => {console.log(err.message)})
// };

module.exports = { getQuizById };