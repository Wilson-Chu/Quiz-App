$(() => {

  $('form').on('submit', (evt) => {

    const data = {};
    data.title = $("#title").val();
    data.description = $("#description").val();

      $.post('/new/quiz', data);

    });
    
  });

  //   const question = `
  //   <div class="question-wrapper">
  //     <div class="new-question">
  //       <textarea name="question" placeholder="Question"></textarea>
  //       <textarea name="answer" placeholder="Correct Answer"></textarea>
  //       <textarea name="answer" placeholder="Option 1"></textarea>
  //       <textarea name="answer" placeholder="Option 2"></textarea>
  //       <textarea name="answer" placeholder="Option 3"></textarea>
  //       <button class="delete-question" type="button">Delete Question</button>
  //     </div>
  //   </div>
  //   `;

  //   $('.question-container').append(question);

  // });
  
  // $(document).on('click', '.delete-question', (evt) => {

  //   console.log($('.delete-question').parent());
  //   $('.delete-question').closest('.new-question').remove()