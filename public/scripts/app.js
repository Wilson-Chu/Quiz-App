$(document).ready(function () {

  // Client facing scripts here

  const createQuizElement = (quizData) => {

    const layout = `
  <h2>${quizData.title}</h2>
  <h4>${quizData.description}<h4>
  `;

    return layout;
  };

  const renderQuizzes = function (quizzes) {
    quizzes.forEach((quiz) => {
      // calls createquizElement for each quiz
      const quizElement = createQuizElement(quiz);

      // takes return value and appends it to the quizzes container
      $('main').append(quizElement);
    });
  };

  $.get('/quizData', (data) => {
    console.log(data)
    $('main').empty();
    renderQuizzes(data);
  });


});