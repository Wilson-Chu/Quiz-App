$(() => {

  $('.add-question').on('click', (evt) => {

    const question = `
    <div class="new-question">
    <textarea name="question" placeholder="Question"></textarea>
    <textarea name="answer" placeholder="Correct Answer"></textarea>
    <textarea name="answer" placeholder="Option 1"></textarea>
    <textarea name="answer" placeholder="Option 2"></textarea>
    <textarea name="answer" placeholder="Option 3"></textarea>
    <button class="delete-question" type="button">Delete Question</button>
    </div>
    `;

    $('.question-container').append(question);

  });
  
  $(document).on('click', '.delete-question', (evt) => {
    $('.delete-question').parent().remove();
  });

});