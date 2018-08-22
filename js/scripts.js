//Business logic
var turnScore = 0;
function NumberCheck(roll){
  if (roll === 1) {
    turnScore = 0;
    alert("Your turn is Over!!");
  } else {
    turnScore += roll;
  }
  return turnScore
}



$(document).ready(function(){
  $("#Player1 button#roll").click(function(event){
    event.preventDefault();

  var thisRoll = Math.floor((Math.random() * 6) + 1);
  $("#diceRoll").text(thisRoll);

  var currentTurnScore = NumberCheck(thisRoll);
  $("span#turnScore").text(currentTurnScore);


});


})
