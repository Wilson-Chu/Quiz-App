const db = require('../connection');

const getResultsByUser = (id) => {
  return db.query(`
  SELECT result, quizzes.title
  FROM results
  JOIN quizzes ON  quizzes.id = quiz_id
  WHERE contestant_id = ${id}`)
    .then(data => {
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};

const getResultsByID = (id) => {
  return db.query(`
  SELECT result, quizzes.title
  FROM results
  JOIN quizzes ON  quizzes.id = quiz_id
  WHERE results.id = ${id}`)
    .then(data => {
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};


module.exports = { getResultsByUser, getResultsByID };