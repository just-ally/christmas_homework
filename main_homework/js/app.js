document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // 1. user submits form
  // 2. Get values - assign to variables
  // 3. Get the div movie-list
  // 4. Create a new div
  // 5. Create paragraphs
  // 6. Insert values
  // 7. Append p -> new div -> movie list
  // 8. Form resets

  const form = document.querySelector('#new-form');

  //1.
  const handleFormSubmit = function(event){
    event.preventDefault();

    //2.
    const title = event.target.title.value;
    const director = event.target.director.value;
    const genre = event.target.genre.value;

    //3.
    const movieList = document.querySelector('#movie-list');

    //4.
    const movieDetails = document.createElement('div');

    //5.
    const titlePara = document.createElement('p');
    const directorPara = document.createElement('p');
    const genrePara = document.createElement('p');

    //6.
    titlePara.textContent = title;
    directorPara.textContent = director;
    genrePara.textContent = genre;

    //7.
    movieDetails.appendChild(titlePara);
    movieDetails.appendChild(directorPara);
    movieDetails.appendChild(genrePara);

    movieList.appendChild(movieDetails);

    //8.
    form.reset();
  }

  form.addEventListener('submit', handleFormSubmit);

});
