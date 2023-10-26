$(document).ready(function () {
  let url = window.location.pathname
  let id = url.split('/').pop()

  const showResults = `
  <button type="submit" class="btn share-result" id="${id}"><i class="fa-solid fa-share"></i> Share Your Results! </button>
    
    `;
  
  $.get(`/api/results/${id}`, (data) => {
    const results = data[0];
    const userID = data[1];

    console.log(userID, 'new results')
    console.log(results, 'new results')

    $('main').append(`
    <section>
    <div class='quiz-container'>
    <h2>${results[0].username}'s for this quiz:</h2>
    <h2>${results[0].title}: ${results[0].result}</h2>
    </div>`);
    
    if( userID === results.contestant_id) {
      $('main').append(showResults);
      
    };
    $('main').append(
      `<button type="submit" class="btn share-quiz" id="${results[0].url_id}"><i class="fa-solid fa-share"></i> Share This Quiz! </button>
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