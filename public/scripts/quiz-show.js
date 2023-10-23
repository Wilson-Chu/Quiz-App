$(document).ready(function () {

  console.log(window.location.pathname)
  const id = window.location.pathname.replace('/quizzes/', '')
  console.log(id)

  const createQuestionElement = (data) => {

    const layout = `
  <h2>${data.question}</h2>
  <h4>${data.answer}<h4>
  <h4>${data.option_1}<h4>
  <h4>${data.option_2}<h4>
  <h4>${data.option_3}<h4>
  `;

    return layout;
  };

  const renderQuiz = ((quiz) => {
    quiz.forEach((q) => {
      // calls createquizElement for each quiz
      const quizElement = createQuestionElement(q);

      // takes return value and appends it to the quizzes container
      $('main').append(quizElement);
    });
  });

  $.get(`/api/quiz-by-id/${id}`, (data) => {
    console.log(data)
    $('main').empty();
    renderQuiz(data);
  });


});