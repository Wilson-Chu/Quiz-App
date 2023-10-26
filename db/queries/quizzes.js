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

const getQuizByUserId = (ownerId) => {

  return db.query(`
  SELECT *
  FROM quizzes
  WHERE owner_id = $1;
  `, [ownerId])
    .then(data => {
      return data.rows;
    })
    .catch(err => { console.log(err.message); });
};

const getQuestionsByUrlId = (id) => {
  const vars = `'${id}'`
  console.log(id, 'sooo')

  return db.query(`
  SELECT question, answer, option_1, option_2, option_3
  FROM quizzes
  JOIN questions ON quiz_id = quizzes.id
  WHERE url_id LIKE $1 
`,["%"+id+"%"])
    .then(data => {
      console.log(data.rows)
      return data.rows;
    })
    .catch(err => {console.log(err.message)})
};



module.exports = { getAllPublicQuizzes, getQuizByUrlID, getQuizByUserId,getQuestionsByUrlId };