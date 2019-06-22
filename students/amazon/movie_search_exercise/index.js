const searchMovie = (event) => {
  fetch(`http://www.omdbapi.com/?s=${event.currentTarget.value}&apikey=adf1f2d7`)
  .then(response => response.json())
  .then((data) => {
    //console.log(data);
    list.innerHTML = "";
    let index = 0;
    let item = "";
    for (index=0; index<10;  index++){
      // create item html element
      list.insertAdjacentHTML('beforeend', item);
    }
  });

  event.preventDefault();
};

// select class row save as list
// select element form input save as input
input.addEventListener("keyup", searchMovie);
