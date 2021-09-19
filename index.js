var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Whats ur Name? ") 

console.log("Welcome " + userName + " Do you know about spiderman? ");

function play (question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right");
      score = score + 1;
  } else {
    console.log("You are wrong")

  }
  console.log("Current score ", score);
  console.log("----------------");
}

 var questions = [{

     question: "Spiderman full name? ",   
     answer: "Peter richard parker",
   }, {
     question: "Spiderman's metor? ",
     answer: "Tony stark"
     
     }, {
       question: "At what age did spiderman got his powers? ",
       answer: "14"
     },  {
       question: "A villian which spiderman believed is a good guy? ",
       answer: "Lizard"
     }, {
       question: "who spiderman loves the most MJ or Gwen stecy? ",
       answer: "MJ"
     }
 ]

 for (var i=0; i<questions.length; i++){
   var currentQuestion = questions[i];
   play(currentQuestion.question, currentQuestion.answer);

 }

function highScore (){
  if (score === 5) {
console.log("Great! you got all the answer correct & you'r scored is " + score );
  } else {
    console.log("You scored " + score + " Better luck next to score full ")
  }
}

highScore();