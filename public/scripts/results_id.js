$(document).ready(function () {
  let url = window.location.pathname
  let id = url.split('/').pop()


  console.log(id, + "HERE ")

$.get(`/api/results/${id}`, (results) => {
  console.log(results)
  $('main').append(`<h4>${results[0].title}: ${results[0].result}<h4/>`);
});
});