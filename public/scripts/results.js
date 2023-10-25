$(document).ready(function() {
  $.get('/api/results', (data) => {
    console.log(data);
    for (let results of data) {
      $('main').append(
        `<h4>${results.title}: ${results.result}<h4/>
      <button type="submit" class="btn" id="${results.id}"> Share Quiz! </button>
        
        `);
    }
    $('.btn').on('click', function() {
      const id = $(this).attr('id');
      $(this).replaceWith(`<a href='http://localhost:8080/quizzes/${id}' <p> http://localhost:8080/quizzes/${id}  </p></a>`);
    });
  });

});