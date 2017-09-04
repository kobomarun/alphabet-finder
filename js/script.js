var button = document.getElementById("button");
var question = document.getElementById("question");
randomLetter="";
var textToSpeak="";
var audio = document.querySelector("audio");
var synth = window.speechSynthesis;


button.addEventListener('click', function(event) {
  var intro = document.getElementById("intro");
  var filter = document.getElementById("filter");
  //var question = document.getElementById("question");

  intro.style.display="none";
  filter.style.display="block";
  audio.currentTime=4;
  question.style.display="block";
  audio.play();
  setTimeout(function() {loadQuestion();}, 5000)
});

function loadQuestion() {
  randomLetter = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
  textToSpeak = question.textContent = "Find Letter " + randomLetter.toUpperCase();
  question.style.backgroundColor="#fff";
  question.style.color="#000";
  speak();
}

function speak(){
  var utterThis = new SpeechSynthesisUtterance(textToSpeak);
  synth.speak(utterThis);
}

function clickText(obj) {
  if(randomLetter.toUpperCase()==obj) {
    textToSpeak = "Great Job.";
    audio.currentTime=6;
    question.style.backgroundColor="green";
    question.style.color="white";
    audio.play();
    setTimeout(function() {loadQuestion();}, 3000)
    //setInterval(function() {}, 30000);

  } else {
    textToSpeak = "Wrong Answer, Try Again";
    question.style.backgroundColor="red";
    question.style.color="white";
    speak();
  }

  console.log(randomLetter);
}
