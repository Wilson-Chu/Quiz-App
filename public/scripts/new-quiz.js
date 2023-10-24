$(() => {

  $('form').on('submit', (evt) => {

    const data = {};
    data.title = $("#title").val();
    data.description = $("#description").val();

    $.post('/new/quiz', data);

    });
    
  });