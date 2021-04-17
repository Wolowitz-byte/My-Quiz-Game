//The School is organizing a quiz online and they need a person to create the game.
var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  //create the canvas
  canvas = createCanvas(850,400);
  database = firebase.database();
  // create new game
  //getting state
  //starting the game
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  //setting background to pink
  //writing if condition for 
  //updating quiz
  //writing if condition for changing
  //gamestate to 1 or play
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
