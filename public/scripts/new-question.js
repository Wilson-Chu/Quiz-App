$(() => {

  const id = window.location.pathname.split('/').pop();

  $("form").on("submit", (evt) => {

    const data = {};

    data.question = $("#question").text();
    data.answer = $("#answer").text();
    data.option1 = $("#option-1").text();
    data.option2 = $("#option-2").text();
    data.option3 = $("#option-3").text();

    console.log('logging', id);
    
    $.post(`/quizzes/edit/${data.id}`, { id });

  });

  $("#done").on("click", (evt) => {

    console.log(id);
    
    location.href = `/quizzes/${id}`;
  });

});