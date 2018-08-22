//Business logic
var turnScore = 0;
var totalScore = 0;

function scoreTally(roll){
  if (roll === 1) {
    turnScore = 0;
    alert("Your turn is Over!!");
  } else {
    turnScore += roll;
  }
  return turnScore
}

function hold() {
  totalScore += turnScore
  turnScore = 0
  console.log(totalScore)

  return totalScore
 }

 function CheckForWin(){
 if (totalScore >= 100) {
   alert("YOU WIN!!!")
 }
}

$(document).ready(function(){
  var currentTurnScore = 0;
  $("#Player1 button#roll").click(function(event){
    event.preventDefault();

  var thisRoll = Math.floor((Math.random() * 6) + 1);
  $("#diceRoll").text(thisRoll);

  var currentTurnScore = scoreTally(thisRoll);
  $("span#turnScore").text(currentTurnScore);


  });

  $("#Player1 button#hold").click(function(event){
    event.preventDefault();
    var currentTotalScore = hold();

    $("#totalScore").text(currentTotalScore);
    $("span#turnScore").text(currentTurnScore);
    CheckForWin();
  })
})
