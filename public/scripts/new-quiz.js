
$(() => {
  console.log("We in here");

  $('form').on('submit', (evt) => {

    const data = {};
    data.title = $("#title").val();
    data.description = $("#description").val();
    data.private = $("#private").val();


    $.post('/new/quiz', data);

    });
    
  });