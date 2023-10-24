$(document).ready(function() {

  const id = window.location.pathname.replace('/quizzes/', '');

  const createQuestionElement = (data) => {
    
    
    let layout = `
    
    
    <h2>${data.question}</h2>

    <div id="answers">
    
    <button type="button" class="btn">${data.answer}</button>
    <button type="button" class="btn" id="option1">${data.option_1}</button>
    `;

    //check if option 2 & 3 have beeen created
    if (data.option_2) {
      layout += `<button type="button" class="btn btn-primary" id="option2"> ${data.option_2} </button>`;
    }
    if (data.option_3) {
      layout += `<button type="button" class="btn btn-primary" id="option3">${data.option_3}</button>`;
    }
    
    layout +=`</div>`;
    return layout;
  };

  const renderQuiz = ((quiz) => {

    console.log(quiz);

    if (!quiz[0]) {
      $('main').append(`<h2>The creator hasn't added questions yet!🥲</h2>`);
      return;
    }

    quiz.forEach((q) => {

      const quizElement = createQuestionElement(q);

      $('#quiz-container').append(quizElement);
    });
  });

  $.get(`/api/quiz-by-id/${id}`, (data) => {
    renderQuiz(data);
    console.log('i am NOT here');

    $('.btn').on('click',
      function() {
        $('#answers').closest('#answers').replaceWith(`<h4>Response Saved</h4>`);
      });
  });
});