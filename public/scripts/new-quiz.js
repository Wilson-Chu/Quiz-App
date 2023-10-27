$(() => {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  console.log("We in here");

  $('form').on('submit', (evt) => {

    const data = {};
    const text = ($("#title").text());
    data.title = text

    console.log($("#title").val(), 'here', data.title,"We in here");

    data.description = $("#description").val();
    data.private = $("#private").val();

    console.log(data.title);

    $.post('/quizzes/new', data);

  });

});