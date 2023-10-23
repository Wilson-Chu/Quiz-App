const generateRandomString = (length) => {
  return Math.random().toString(36).substring(2, 2 + length);
};

const getUserByEmail = (email, database) => {
  let user;

  for (const userId in database) {
    if (database[userId].email === email) { // Found existing user
      user = database[userId];
      break;
    }
  }

  return user; // undefined, if no email found
};

const authenticateUser = (id, database) => {
  let userID;

  for (const userId in database) {
    if (userId === id) {
      userID = database[id];
      break;
    }
  }

  return userID;
};

module.exports = { generateRandomString, getUserByEmail, authenticateUser };