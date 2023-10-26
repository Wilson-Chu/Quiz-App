$(document).ready(function () {
  let url = window.location.pathname
  let id = url.split('/').pop()

$.get(`/api/results/${id}`, (results) => {
  console.log(results)
  $('main').append(`
  <section>
  <div class='quiz-container'>
  <h2>Your results for this quiz:</h2>
  <h2>${results[0].title}: ${results[0].result}</h2>
  </div>
  </section>`);
});
});