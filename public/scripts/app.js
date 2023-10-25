$(document).ready(function() {

  // Client facing scripts here

  const createQuizElement = (quizData) => {
    const layout = `
    <div class="quiz-container">
    <a href='http://localhost:8080/quizzes/${quizData.url_id}'>
          <h2>${quizData.title}</h2>
          </a>
          <h4>${quizData.description}<h4>
        <div>
      <button type="submit" class="btn" id="${quizData.url_id}"> Share Quiz! </button>
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
      const id = $(this).attr('id') 
      $(this).replaceWith(`<a href='http://localhost:8080/quizzes/${id}' <p> http://localhost:8080/quizzes/${id}  </p></a>`)
    })
  });
});