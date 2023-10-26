$(() => {
  console.log("We in here");

  $('form').on('submit', (evt) => {

    const data = {};
    data.title = $("#title").val();
    data.description = $("#description").val();
    data.private = $("#private").val();

    console.log(data.title);

    $.post('/quizzes/new', data);

  });

});