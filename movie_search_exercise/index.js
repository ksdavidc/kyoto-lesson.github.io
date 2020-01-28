const searchMovie = (event) => {
  fetch(`http://www.omdbapi.com/?s=${event.currentTarget.value}&apikey=adf1f2d7`)
  .then(response => response.json())
  .then((data) => {
    //console.log(data);
    list.innerHTML = "";
    let index = 0;
    let item = "";
    for (index=0; index<10;  index++){

      item = `<div class="col-xs-4"><div class="shadow p-4 m-3 text-center"><img src='${data.Search[index].Poster}' alt="movie"><p class="m-0 mt-3">'${data.Search[index].Title}'</p></div></div>`;

      // create item html element
      list.insertAdjacentHTML('beforeend', item);
    }
  });

  event.preventDefault();
};

const list = document.querySelector(".row");
const input = document.querySelector("form input");
input.addEventListener("keyup", searchMovie);
// input.addEventListener("click", (event) => {alert("you've just clicked!")});
