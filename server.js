// load .env data into process.env
require('dotenv').config();

// load helpers
const { generateRandomString } = require('./helpers');

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const bcrypt = require("bcryptjs");

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: [generateRandomString(12)],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const register = require('./routes/register');
const quizzesApiRoutes = require('./routes/quizzes-api');
const quizbyIdApiRoutes = require('./routes/quiz-by-id-api');
const resultsApiRoutes = require('./routes/results-api');
const newQuestion = require('./routes/new-question.js');
const quizzesRoutes = require('./routes/quizzes');
const resultsRoutes = require('./routes/results');
const { requireAuth } = require('./public/scripts/isAuthenticated');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`


app.use('/api/quizzes', quizzesApiRoutes);
app.use('/api/results', resultsApiRoutes);
app.use('/api/quiz-by-id', quizbyIdApiRoutes);
app.use('/quizzes/edit', newQuestion);
app.use('/quizzes', quizzesRoutes);
app.use('/results', resultsRoutes);
app.use('/register', register);
app.use('/logout', logoutRoutes);
app.use('/login', loginRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', requireAuth, (req, res) => { // protected route
  const templateVars = { user: null };
  res.render('index', templateVars);
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
