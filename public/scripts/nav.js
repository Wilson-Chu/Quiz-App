$(document).ready(function () {

  $("span").on("click", ((evt) => {
    $("nav").toggle(200);
    $(".fa-bars").toggleClass("fa-x")
  }))

})