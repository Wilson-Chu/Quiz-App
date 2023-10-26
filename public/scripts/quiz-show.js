$(document).ready(function() {

  let url = window.location.pathname;
  let id = url.split('/').pop();
  console.log(id);

  const shuffle = function(array) {
    let currentIndex = array.length;
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const createQuestionElement = (data) => {

    //creates the html for each option
    const a = `<label> <input type="radio" name="answer" id="a" value="${data.answer}"/> ${data.answer} </label>`;
    const q1 = `<label> <input type="radio" name="answer" id="b" value="${data.option_1}"/> ${data.option_1} </label>`;
  
    qArr = [a, q1];
    
    //checks to see if option 2 and 3 exist as they can be null values
    if (data.option_2){
      const q2 = `<label> <input type="radio" name="answer" id="a" value="${data.option_2}"/> ${data.option_2} </label>`;
      qArr.push(q2);
    }
  
    if (data.option_2){
      const q3 = `<label> <input type="radio" name="answer" id="a" value="${data.option_3}"/> ${data.option_3} </label>`;
      qArr.push(q3);
    }
  
    //shuffles the array
    const shuffledArr = shuffle(qArr);

    //builds the layout
    let layout = `
    <h2>${data.question}</h2>
    <div id="answers">
    `
    shuffledArr.forEach (each => {
      layout += each
    })

    // let layout = `
    // <h2>${data.question}</h2>
    // <div id="answers">
    // <label> <input type="radio" name="answer" id="a" value="${data.answer}"/> ${data.answer} </label>
    // <label> <input type="radio" name="answer" id="b" value="${data.option_1}"/> ${data.option_1} </label>
    // `;

    // //check if option 2 & 3 have beeen created
    // if (data.option_2) {
    //   layout += `    <label> <input type="radio" name="answer" id="c" value="${data.option_2}"/> ${data.option_2} </label>
    //   `;
    // }

    // if (data.option_3) {
    //   layout += `    <label> <input type="radio" name="answer" id="d" value="${data.option_3}"/> ${data.option_3} </label>
    //   `;
    // }

    layout += `</div>`;
    return layout;
  };

  // const renderQuiz = ((quiz) => {

  //   if (!quiz[0]) {
  //     $('main').append(`<h2>The creator hasn't added questions yet!🥲</h2>`);
  //     return;
  //   }

  //   quiz.forEach((q) => {

  //     const quizElement = createQuestionElement(q);

  //     $('#quiz-container').append(quizElement);
  //   });
  // });

  $.get(`/api/quiz-by-id/${id}`, function(data) {
    console.log(data)
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
        if (n === quizData.length) {
          $('main').empty();
          $('main').append(`
            <div class="result-display">
            <h2>You made it - nice work!</h2>
            <form method="post" action="/results">   
            <input type="hidden" name="score" value="${correctAnswers}/${quizData.length}" />
            <input type="hidden" name="urlID" value="${id}" />
            <button type="submit"  value="Submit">Get My Results!</button>
            </div>
          `);
        }
        // else {
        //   $('#quiz-container').empty();
        //   $('.btn').replaceWith(

        //     `<form method="post" action="/results">   <input type="submit"  value="Submit">
        //     <input type="hidden" name="score" value="${correctAnswers}" />
        //     <input type="hidden" name="urlID" value="${id}" />

        //     Get Results

        //     `);
        // }
      });

  });

});
