const db = require('../connection');

const getAllPublicQuizzes = () => {
  return db.query(`
  SELECT title, description, id, url_id
  FROM quizzes
  WHERE private = false`)
    .then(data => {
      return data;
    })
    .catch(err => { console.log(err.message); });
};

const getQuizByUrlID = (urlID) => {

  return db.query(`
  SELECT title, description, id, url_id
  FROM quizzes
  WHERE url_id = $1;
  `, [urlID])
    .then(data => {
      return data.rows;
    })
    .catch(err => { console.log(err.message); });
};

module.exports = { getAllPublicQuizzes, getQuizByUrlID };