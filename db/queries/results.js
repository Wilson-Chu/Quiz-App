const db = require('../connection');

const getResultsByUser = (id) => {
  console.log(id, 'USER ID');

  return db.query(`
  SELECT result, quizzes.title, results.id, results.date_created
  FROM results
  JOIN quizzes ON  quizzes.id = quiz_id
  WHERE contestant_id = $1
  ORDER BY date_created DESC`
    , [id])
    .then(data => {
      return data.rows;
    })
    .catch(err => { console.log(err.message); });
};

const getResultsByID = (id) => {
  return db.query(`
  SELECT result, quizzes.title, quizzes.url_id, username, contestant_id
  FROM results
  JOIN quizzes ON  quizzes.id = quiz_id
  JOIN users ON  users.id = contestant_id
  WHERE results.id = $1`, [id])
    .then(data => {
      return data.rows;
    })
    .catch(err => { console.log(err.message); });
};

module.exports = { getResultsByUser, getResultsByID };