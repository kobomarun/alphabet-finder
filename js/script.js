var button = document.getElementById("button");
var question = document.getElementById("question");
var randomLetter="";
var textToSpeak="";
var welcomeMessage = "Welcome to Alphabet Finder";
var audio = document.querySelector("audio");
//text to speech
var synth = window.speechSynthesis;


button.addEventListener('click', function(event) {
  var intro = document.getElementById("intro");
  var filter = document.getElementById("filter");

  intro.style.display="none";
  filter.style.display="block";
  //audio.currentTime=6;
  question.style.display="block";
  welcomeMsg();
  setTimeout(function() {loadQuestion();}, 3000)
});

function loadQuestion() {
  randomLetter = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
  textToSpeak = question.textContent = "Find Letter " + randomLetter.toUpperCase();
  question.style.backgroundColor="#fff";
  question.style.color="#000";
  speak();
}

function welcomeMsg(){
  var utterThis = new SpeechSynthesisUtterance(welcomeMessage);
  synth.speak(utterThis);
}

function speak(a){
  var utterThis = new SpeechSynthesisUtterance(textToSpeak);
  synth.speak(utterThis);
}

function clickText(obj) {
  if(randomLetter.toUpperCase()==obj) {
    textToSpeak = "Great Job.";
    audio.currentTime=6;
    question.style.backgroundColor="green";
    question.style.color="white";
    speak(textToSpeak);
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
