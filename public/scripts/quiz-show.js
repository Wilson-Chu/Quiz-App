$(document).ready(function() {

  const id = window.location.pathname.replace('/quizzes/', '');

  const createQuestionElement = (data) => {


    let layout = `
    
    
    <h2>${data.question}</h2>

    <div id="answers">
    
    <label> <input type="radio" name="answer" id="a" value="${data.answer}"/>${data.answer} </label>
    <label> <input type="radio" name="answer" id="b" value="${data.option_1}"/>${data.option_1} </label>
    `;

    //check if option 2 & 3 have beeen created
    if (data.option_2) {
      layout += `    <label> <input type="radio" name="answer" id="c" value="${data.option_2}"/>${data.option_2} </label>
      `;
    }
    if (data.option_3) {
      layout += `    <label> <input type="radio" name="answer" id="d" value="${data.option_3}"/>${data.option_3} </label>
      `;
    }

    layout += `</div>`;
    return layout;
  };

  const renderQuiz = ((quiz) => {

    if (!quiz[0]) {
      $('main').append(`<h2>The creator hasn't added questions yet!🥲</h2>`);
      return;
    }

    quiz.forEach((q) => {

      const quizElement = createQuestionElement(q);

      $('#quiz-container').append(quizElement);
    });
  });

  $.get(`/api/quiz-by-id/${id}`, function(data) {
    let n = 0;
    let correctAnswers = 0;
    const quizData = data;
    const quizElement = createQuestionElement(quizData[n]);
    $('#quiz-container').append(quizElement);
    $('.btn').on('click',
      function() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        const answer = selectedOption.value;
        if (answer === quizData[n].answer) {
          correctAnswers++;
        }
        n++;
        $('#quiz-container').empty();
        if (n < quizData.length) {
          $('#quiz-container').append(createQuestionElement(quizData[n]));
        }
        else {
          $('#quiz-container').empty();
          $('.btn').replaceWith(

            `<form method="post" action="/results">   <input type="submit"  value="Submit">
            <input type="hidden" name="score" value="${correctAnswers}" />
            <input type="hidden" name="urlID" value="${id}" />

            Get Results
            
            `);
        }
      });

  });

});
