$(document).ready(function () {
  let url = window.location.pathname
  let id = url.split('/').pop()


  console.log(id, + "HERE ")

$.get(`/api/results/${id}`, (data) => {
  console.log(data)
  $('main').append(`<h4>${results.title}: ${results.result}<h4/>`);
});
});