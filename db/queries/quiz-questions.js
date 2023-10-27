const db = require('../connection');

const getQuizById = (id) => {
  const vars = `'${id}'`;
  console.log(id, 'sooo');

  return db.query(`
  SELECT question, answer, option_1, option_2, option_3
  FROM quizzes
  JOIN questions ON quiz_id = quizzes.id
  WHERE url_id LIKE $1 
`,["%" + id + "%"])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

module.exports = { getQuizById };