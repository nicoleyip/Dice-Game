var n1 = Math.random();
var n2 = Math.random();
var dice1 = Math.ceil(n1 * 6);
var dice2 = Math.ceil(n2 * 6);
document.querySelector(".dice1").src = "images/dice" + dice1 + ".png";
document.querySelector(".dice2").src = "images/dice" + dice2 + ".png";

if(dice1 > dice2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(dice1 < dice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
