$(document).ready(function() {
  $.get('/api/results', (data) => {
    console.log(data);
    for (let results of data) {
      $('main').append(`
      <section>
      <div class='quiz-container'>
      <h2>Your results for this quiz:</h2>
      <h2>${results.title}: ${results.result}</h2>
      </div>
      </section>
      <button type="submit" class="btn" id="${results.id}"><i class="fa-solid fa-share"></i> Share Quiz! </button>
      `);
      // <button type="submit" class="btn" id="${results.id}"> Share Quiz! </button>
    }
    $('.btn').on('click', function() {
      const id = $(this).attr('id');
      navigator.clipboard.writeText(`http://localhost:8080/quizzes/${id}`)
      alert('Link copied to clipboard!')
      // $(this).replaceWith(`<a href='http://localhost:8080/quizzes/${id}' <p> http://localhost:8080/quizzes/${id}  </p></a>`);
    });
  });

});