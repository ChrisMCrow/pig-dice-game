//Business logic
var turnScore = 0;
var player1 = {};
var player2 = {};


function Player(name) {
  this.name = name;
  this.score = 0;
}

Player.prototype.hold = function() {
  this.score += turnScore
  turnScore = 0
  return this.score
}

Player.prototype.win = function() {
  if (this.score >= 100) {
    alert(this.name + " wins!")
  }
}


function scoreTally(roll) {
  if (roll === 1) {
    turnScore = 0;
    alert("Your turn is over!")
  } else {
    turnScore += roll;
  }
  return turnScore
}


$(document).ready(function(){

  var currentTurnScore1 = 0;
  var currentTotalScore1 = 0
  var currentTurnScore2 = 0;
  var currentTotalScore2 = 0;

//Player Constructors
  $("#p1form").submit(function(event) {
    event.preventDefault();
    var player1Name = $("#p1name").val();
    console.log(player1Name);
    player1 = new Player(player1Name);
    $("#p1form").hide();
    $("#p1header").text(player1Name);
  });


  $("#p2form").submit(function(event) {
    event.preventDefault();
    var player2Name = $("#p2name").val();
    console.log(player2Name);
    player2 = new Player(player2Name);
    $("#p2form").hide();
    $("#p2header").text(player2Name);
  });

//Roll Buttons
  $("#roll1").click(function(event){
    event.preventDefault();

    var thisRoll = Math.floor((Math.random() * 6) + 1);
    $(".Player1 * #diceRoll").text(thisRoll);

    var currentTurnScore1 = scoreTally(thisRoll);
    $(".Player1 * #turnScore").text(currentTurnScore1);
  });

  $("#roll2").click(function(event){
    event.preventDefault();

    var thisRoll = Math.floor((Math.random() * 6) + 1);
    $(".Player2 * #diceRoll").text(thisRoll);

    var currentTurnScore2 = scoreTally(thisRoll);
    $(".Player2 * #turnScore").text(currentTurnScore2);
  });


//Hold Buttons
  $("#hold1").click(function(event){
    event.preventDefault();
    console.log(player1);
    var currentTotalScore = player1.hold();

    $(".Player1 * #totalScore").text(currentTotalScore);
    $(".Player1 * #turnScore").text(currentTurnScore1);

    player1.win();
  });

  $("#hold2").click(function(event){
    event.preventDefault();
    console.log(player2);

    var currentTotalScore = player2.hold();

    $(".Player2 * #totalScore").text(currentTotalScore);
    $(".Player2 * #turnScore").text(currentTurnScore2);

    player2.win();
  });

});
