$(document).ready(function () {

  const id = window.location.pathname.replace('/quizzes/', '');

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

    console.log(quiz)

    if (!quiz[0]) {
      $('main').append(`<h2>The creator hasn't added questions yet!🥲</h2>`);
      return;
    }

    quiz.forEach((q) => {
      const quizElement = createQuestionElement(q);

      $('main').append(quizElement);
    });
  });

  $.get(`/api/quiz-by-id/${id}`, (data) => {
    $('main').empty();
    renderQuiz(data);
  });


});