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
  id = window.location.pathname.split('/').pop()

  $("form").on("submit", (evt) => {

    const data = {};

    data.question = $("#question").text();
    data.answer = $("#answer").text();
    data.option1 = $("#option-1").text();
    data.option2 = $("#option-2").text();
    data.option3 = $("#option-3").text();

    console.log('logging', id)
    
    $.post(`/quizzes/edit/${data.id}`, { id })

  });

  $("#done").on("click", (evt) => {

    console.log(id)
    
    location.href = `/quizzes/${id}`
  });

});