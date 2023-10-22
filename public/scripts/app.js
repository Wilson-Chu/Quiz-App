// const { all } = require('../../routes/users.js');
$(document).ready(function() {

// Client facing scripts here

$.get('/quizzes', (data) => {
    let $quizinfo = 
    `<h2> ${data.title} </h2>`;

    return $quizinfo;
});
const allPublicQuizzes = $.getJSON('/quizzes');
console.log(allPublicQuizzes);

// const createQuizElement = (quizData) => {

//   const layout = `
//   <h2>${quizData.title}</h2>
//   <p>${quizData.description}</p>
// `;
// };

// const renderQuizzes = function(quizzes) {
//     for (let quiz of quizzes) { 
//       // calls createquizElement for each quiz
//       const $quiz = createQuizElement(quiz);
  
//       // takes return value and appends it to the quizzes container
//       $('main').append($quiz);
//       console.log("Testing 123");
//     }
//   };

// renderQuizzes(allPublicQuizzes);

});