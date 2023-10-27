const db = require('../connection');

const createQuiz = (input) => { //writes question

  const {title, description, userId, urlID} = input;
  const private = Boolean(input.private);

  console.log('in INSERT', private);

  return db.query(`
  INSERT INTO quizzes(title, description, owner_id, private,url_id)
  VALUES($1, $2, $3, $4, $5) 
  RETURNING *;
  `,
  [title, description, userId, private, urlID])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

module.exports = { createQuiz };