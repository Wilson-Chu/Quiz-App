const db = require('../connection');

const getUserWithEmail = function(email) {
  return db
    .query(`SELECT username, password, id FROM users WHERE email = $1 `, [email])
    .then(result => {
      return result.rows[0];
    })
    .catch(err => {
      console.log(err.message);
      return null;
    });
};

module.exports = {getUserWithEmail}