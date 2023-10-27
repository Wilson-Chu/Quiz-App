$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  // Client facing scripts here

  const createQuizElement = (quizData) => {
    const layout = `
    <div class="quiz-container">
          <h2>${escape(quizData.title)}</h2>
          <h4>${escape(quizData.description)}<h4>
          <a href='http://localhost:8080/quizzes/${escape(quizData.url_id)}'> 
            <button type="submit" class="accent-btn" id="${escape(quizData.url_id)}">
            <i class="fa-solid fa-pen"></i> Take Quiz! </button>
          </a>
          <button type="submit" class="btn" id="${escape(quizData.url_id)}"><i class="fa-solid fa-share"></i> Share Quiz! </button>
          <div>
    `;
    return layout;
  };

  const renderQuizzes = function(quizzes) {
    quizzes.forEach((quiz) => {
      // calls createquizElement for each quiz
      const quizElement = createQuizElement(quiz);

      // takes return value and appends it to the quizzes container
      $('section').append(quizElement);
    });
  };

  $.get('/api/quizzes', (data) => {
    console.log(data);
    $('section').empty();
    renderQuizzes(data);
    $('.btn').on('click',function() {
      const id = $(this).attr('id');
      // $(this).replaceWith(`<textarea http://localhost:8080/quizzes/${id}></textarea>`)
      navigator.clipboard.writeText(`http://localhost:8080/quizzes/${(id)}`);
      alert('Link copied to clipboard!');

    });
  });
});