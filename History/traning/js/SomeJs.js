//Loader 
let myLoading = document.getElementById("loader");
let myBody = document.querySelector("body");
myBody.onload = setTimeout(function myFunction() {
  myLoading.style.display = "none";
  myBody.style.overflow='visible';
}, 6000);

let oo= document.getElementById('counter');
let startButton= document.getElementById('but').onclick = Start;
function Start() {

  oo.style.display = "none";
}
