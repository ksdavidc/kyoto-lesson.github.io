            
const searchMovie = (event) => {
  fetch(`http://www.omdbapi.com/?s=${event.currentTarget.value}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      //console.log(data);
      list.innerHTML = "";

    });
    event.preventDefault();
};


// const list = ???
// const input = ???
input.addEventListener("keyup", searchMovie);

