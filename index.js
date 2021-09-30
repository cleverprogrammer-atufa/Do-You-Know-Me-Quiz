var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

 // data of high score
var highScores = [
  { 
    name: "Aliza",
    score: 5,
  },

  {
    name: "Areeba",
    score: 4,
  },
]

// welcome
function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log(chalk.bold("Welcome "+ userName + " to DO YOU KNOW ME ?"));
}


// questions 
var questionOne ={
  question: "Where do I live? ",
  answer:"Moradabad"
}
var questionTwo ={
  question: "Where do I Study? ",
  answer:"TMU"
}
var questionThree ={
  question: "Do I like Programming? ",
  answer:"Yes"
}
var questionFour ={
  question: "What is my Birthday Month? ",
  answer:"November"
}
var questionFive ={
  question: "What is my favorite color ",
  answer:"Blue"
}
var questions = [questionOne ,questionTwo,questionThree, questionFour,questionFive];

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
  
    console.log(chalk.green(" You are Right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red(" You are Wrong!"));
   
  }

  console.log("Your score is: ", score);
  console.log("-------------------------------------")
}
// score
function Currentscore() {
  console.log("YAY! You SCORED: ", score);
  
  highScores.map(score => console.log(score.name, " : ", score.score))
}



// calling of functions
welcome();

console.log(" Lets start quiz    ")
game();
Currentscore();

