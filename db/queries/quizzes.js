const db = require('../connection');

const getAllPublicQuizzes = () => {
  return db.query(`
  SELECT title, description, id 
  FROM quizzes
  WHERE private = false`)
    .then(data => {
      return data;
    })
    .catch(err => {console.log(err.message)})
};

module.exports = { getAllPublicQuizzes };