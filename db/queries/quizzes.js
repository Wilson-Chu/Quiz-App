const db = require('../connection');

const getAllPublicQuizzes = () => {
  return db.query(`
  SELECT title, description 
  FROM quizzes
  WHERE private = false`)
    .then(data => {
      // console.log(data.rows)
      return data.rows;
    })
    .catch(err => {console.log(err.message)});
};

module.exports =  {getAllPublicQuizzes} ;