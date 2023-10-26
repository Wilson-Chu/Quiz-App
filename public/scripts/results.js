$(document).ready(function() {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  $.get('/api/results', (data) => {
    console.log(data);
    for (let results of data) {
      $('main').append(`
      <section>
      <div class='quiz-container'>
      <h2>Your results for this quiz:</h2>
      <h2>${escape(results.title)}: ${escape(results.result)}</h2>
      </div>
      </section>
      <button type="submit" class="btn" id="${results.id}"><i class="fa-solid fa-share"></i> Share Your Results! </button>
      `);
      // <button type="submit" class="btn" id="${results.id}"> Share Quiz! </button>
    }
    $('.btn').on('click', function() {
      const id = $(this).attr('id');
      navigator.clipboard.writeText(`http://localhost:8080/results/${id}`)
      alert('Link copied to clipboard!')
      // $(this).replaceWith(`<a href='http://localhost:8080/quizzes/${id}' <p> http://localhost:8080/quizzes/${id}  </p></a>`);
    });
  });
});