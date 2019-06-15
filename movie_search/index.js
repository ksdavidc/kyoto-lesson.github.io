            
const searchMovie = (event) => {
  fetch(`http://www.omdbapi.com/?s=${event.currentTarget.value}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      //console.log(data);
      list.innerHTML = "";
      let index = 0;
      let item = "";
      for (index=0; index<10;  index++){
        if(data.Search[index].Poster!="N/A"){
          item = `<div class="col-xs-4"><div class="shadow p-4 m-3 text-center"><img src='${data.Search[index].Poster}' alt='movie'><p class="m-0 mt-3 text-center">${data.Search[index].Title}</p></div></div>`;
        }
        else{
          item = `<div class="col-xs-4"><div class="shadow p-4 m-3 text-center"><img src='images/noimage.jpg' alt='movie'><p class="m-0 mt-3 text-center">${data.Search[index].Title}</p></div></div>`;
        }
        list.insertAdjacentHTML('beforeend', item);
      }
    });
    event.preventDefault();
};


// const searchMovie = (event) => {
//   fetch(`http://www.omdbapi.com/?s=${event.currentTarget.value}&apikey=adf1f2d7`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//   }

// console.log('hello world')
const list = document.querySelector(".row");
const input = document.querySelector("form input");
list.addEventListener("click", (event) => {alert("list clicked!")})
// input.addEventListener("keyup", searchMovie);
