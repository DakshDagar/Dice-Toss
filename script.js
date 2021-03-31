var randomNumber1 = 1 + Math.floor(Math.random()*6);
var randomNumber2 = 1 + Math.floor(Math.random()*6);

var imageOneName = "images/dice" + randomNumber1 + ".png";
var imageTwoName = "images/dice" + randomNumber2 + ".png";



document.querySelector(".img1").setAttribute("src", imageOneName);
document.querySelector(".img2").setAttribute("src", imageTwoName);

function result(){
  if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins";
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector("h2").innerHTML = "🚩 Player 2 Wins";
  }
  else{
    document.querySelector("h2").innerHTML = "Draw";
  }
}


result();
