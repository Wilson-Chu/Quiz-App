$(document).ready(function() {

  $("span").on("click", ((evt) => {
    $("nav").toggle(200);
    $(".fa-bars").toggleClass("fa-x");
    $("main").toggleClass("blur");
  }));

  // $.ajax({
  //   url: '../routes/login.js',
  //   method: 'GET',
  //   dataType: 'json',
  //   success: function(data) {
  //     const isAuthenticated = data.isAuthenticated;
  //     // Use the value of isAuthenticated to apply dynamic CSS conditions
  //     if (isAuthenticated) {
  //       $('#login-btn').hide();
  //       $('#register-btn').hide();
  //     } else {
  //       $('#logout-btn').hide();
  //     }
  //   },
  // });

});