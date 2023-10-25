$(document).ready(function() {

  // Client facing scripts here

  const createQuizElement = (quizData) => {

    const layout = `
      <a href='http://localhost:8080/quizzes/${quizData.url_id}'>
        <div class="quiz-container">
          <h2>${quizData.title}</h2>
          <h4>${quizData.description}<h4>
        <div>
      </a>
      <button type="submit" class="btn"> Share Quiz! </button>
    `;
    return layout;
  };

  const renderQuizzes = function(quizzes) {
    quizzes.forEach((quiz) => {
      // calls createquizElement for each quiz
      const quizElement = createQuizElement(quiz);

      // takes return value and appends it to the quizzes container
      $('main').append(quizElement);
    });
  };


  $.get('/api/quizzes', (data) => {
    console.log(data);
    $('section').empty();
    renderQuizzes(data);
    $('.btn').on('click',function() {
      $('.btn').closest('button').replaceWith(`<h4> Here</h4>`)
    })
  });

});