let blue = document.getElementById("blue");
blue.addEventListener("click", change_blue);

let red = document.getElementById("red");
red.addEventListener("click", change_red);

let yellow = document.getElementById("yellow");
yellow.addEventListener("click", change_yellow);

function change_red() {
  document.body.style.backgroundColor = "red";
}
function change_blue() {
  document.body.style.backgroundColor = "blue";
}
function change_yellow() {
  document.body.style.backgroundColor = "yellow";
}
let submit = document.getElementById("submit");
submit.addEventListener("click", add_food);

function add_food() {
  var item = document.getElementById("fav_food").value;

  document.getElementById("add_food").innerHTML = "<p>" + item + "</p>";
}
