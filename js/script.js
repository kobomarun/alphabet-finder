var randomLetter="";
var textToSpeak="";
var welcomeMessage = "Welcome to Alphabet Finder";
var audio = document.querySelector("audio");
//text to speech
var synth = window.speechSynthesis;

var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'
, 'W', 'X', 'Y', 'Z'];

function welcomeMsg(){
  var utterThis = new SpeechSynthesisUtterance(welcomeMessage);
  synth.speak(utterThis);
}


button.addEventListener('click', function(event) {

  intro.style.display="none";
  filter.style.display="block";
  loadAlphabets();
  //audio.currentTime=6;
  question.style.display="block";
  welcomeMsg();
  setTimeout(function() {loadQuestion();}, 3000)
});

function loadAlphabets() {

  alphabets.filter(function(row) {
    var li = document.createElement("li");
    li.setAttribute('id', row);
    li.setAttribute('onclick', "clickText(this.id)");
    node = document.createTextNode(row);
    boxed.appendChild(li);
    li.appendChild(node);

  });
}

function loadQuestion() {
  randomLetter = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
  textToSpeak = question.textContent = "Find Letter " + randomLetter.toUpperCase();
  question.style.backgroundColor="#fff";
  question.style.color="#000";
  speak();
}

function speak(a){
  var utterThis = new SpeechSynthesisUtterance(textToSpeak);
  synth.speak(utterThis);
}

var i = 1;

function clickText(obj) {
  if(randomLetter.toUpperCase()==obj) {
    var count = i++;
    var myScore = score.innerHTML= " " +  count;
    if(count == 4) {
      audio.play();
      question.innerHTML="Level 1 Completed";
      congratulatoryMessages = "Congratulations. Level 1 completed";
      //speak(congratulatoryMessages);
      intro.style.display="block";
      filter.style.display="none";
      button.textContent = "Play Level 2";

      } else if(count == 7) {
      audio.play();
      question.innerHTML="Level 2 Completed";
      congratulatoryMessages = "Congratulations. Level 2 completed";
      //speak(congratulatoryMessages);
      intro.style.display="block";
      filter.style.display="none";
      button.textContent = "Play Level 3";
      
    }
    else {
      textToSpeak = "Great Job.";
      audio.currentTime=6;
      question.style.backgroundColor="green";
      question.style.color="white";

      speak(textToSpeak);
      audio.play();
      setTimeout(function() {loadQuestion();}, 3000);
    }

  } else {
    textToSpeak = "Wrong Answer, Try Again";
    question.style.backgroundColor="red";
    question.style.color="white";
    speak();
  }

  console.log(randomLetter);
}
