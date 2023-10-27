const db = require('../connection');

const createNewUser = (input) => {

  const { username, email, password } = input;

  return db.query(`
  INSERT INTO users (username, email, password)
  VALUES($1, $2, $3)
  RETURNING *`,
  [username, email, password])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

module.exports = { createNewUser };