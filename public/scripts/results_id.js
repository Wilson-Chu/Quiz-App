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
    <button type="submit" class="btn share-result" id="${id}"><i class="fa-solid fa-share"></i> Share Your Results! </button>
    <button type="submit" class="btn share-quiz" id="${results[0].url_id}"><i class="fa-solid fa-share"></i> Share This Quiz! </button>
    </section>`);

      $('.share-result').on('click', function() {
        const link = $(this).attr('id');
        console.log(link);
        navigator.clipboard.writeText(`http://localhost:8080/results/${link}`)
        alert('Link copied to clipboard!')
      })

      $('.share-quiz').on('click', function() {
        const link = $(this).attr('id');
        console.log(link);
        navigator.clipboard.writeText(`http://localhost:8080/quizzes/${link}`)
        alert('Link copied to clipboard!')
      })

  });

});