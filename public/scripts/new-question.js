$(() => {

  // $('#add-question').on('click', (evt) => {

  //   const question = `
  //   <div class="question-wrapper">
  //     <div id="new-question">
  //     <textarea name="question" placeholder="Question"></textarea>
  //     <textarea name="answer" placeholder="Correct Answer"></textarea>
  //     <textarea name="option1" placeholder="Option 1"></textarea>
  //     <textarea name="option2" placeholder="Option 2"></textarea>
  //     <textarea name="option3" placeholder="Option 3"></textarea>
  //     <button id="delete-question" type="button">Delete Question</button>
  //     </div>
  //   </div>
  //   `;

  //   $('.question-container').append(question);

  // });
  
  // $(document).on('click', '#delete-question', (evt) => {

  //   console.log($('.delete-question').parent());
  //   $('#delete-question').closest('#new-question').remove()
  // });
  id = window.location.pathname.replace('/edit/', '')

  $("form").on("submit", (evt) => {

    const data = { test: 'test text'};

    data.question = $("#question").val();
    data.answer = $("#answer").val();
    data.option1 = $("#option-1").val();
    data.option2 = $("#option-2").val();
    data.option3 = $("#option-3").val();

    console.log('logging', question)
    
    $.post(`/edit/${data.id}`, { id })

  });

  $("#done").on("click", (evt) => {

    console.log(id)
    
    location.href = `/quizzes/${id}`
  });

});