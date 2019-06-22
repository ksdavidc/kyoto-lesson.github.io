// alert("this is my website!");

// document.querySelector(".row h1").hidden = true;
// document.querySelector(".row h1").hidden = false;
// document.querySelector(".row h1").classList.add("red");
// document.querySelector(".row h1").classList.remove("red");
document.querySelector(".row h1").addEventListener("click", (event) => {alert("click on title!")});
document.querySelector("main").hidden = true;
document.querySelector(".LessText").hidden = true;
document.querySelector(".LessText").addEventListener ("click", (event) => {document.querySelector("main").hidden = true; document.querySelector(".LessText").hidden = true; document.querySelector(".ReadMoreBotton").hidden = false;});
document.querySelector(".ReadMoreButton").addEventListener("click", (event) => {document.querySelector("main").hidden = false; document.querySelector(".LessText").hidden = false; document.querySelector(".ReadMoreBotton").hidden = true;});
document.querySelector(b).hidden = true;