//Business logic
var turnScore = 0;
var player1 = {};
var player2 = {};

function Player(name, turnValue) {
  this.name = name;
  this.score = 0;
  this.turn = turnValue;
}

Player.prototype.hold = function() {
  this.score += turnScore
  turnScore = 0
  player1.turn = !player1.turn;
  return this.score
}

Player.prototype.win = function() {
  if (this.score >= 100) {
    alert(this.name + " wins!")
  }
}

function turnChecker() {
  if (player1.turn === true) {
    return player1.name
  } else {
    return player2.name
  }
}


function scoreTally(roll) {
  if (roll === 1) {
    turnScore = 0;
    player1.turn = !player1.turn;
  } else {
    turnScore += roll;
  }
  return turnScore
}


$(document).ready(function(){

  var currentTurnScore = 0;
  var currentTotalScore = 0

//Player Constructors
  $("#p1form").submit(function(event) {
    event.preventDefault();
    var player1Name = $("#p1name").val();
    player1 = new Player(player1Name, true);
    $("#p1form").hide();
    $(".turnHeader").show();
    $("#turnName").text(player1.name);
    $("#p1header").text(player1Name);
  });


  $("#p2form").submit(function(event) {
    event.preventDefault();
    var player2Name = $("#p2name").val();
    player2 = new Player(player2Name, false);
    console.log(player2);
    $("#p2form").hide();
    $("#p2header").text(player2Name);
  });

//Roll Buttons
  $("#roll").click(function(event){
    event.preventDefault();
    var thisRoll = Math.floor((Math.random() * 6) + 1);
    $("#diceRoll").text(thisRoll);
    var currentTurnScore = scoreTally(thisRoll);
    $("#turnScore").text(currentTurnScore);
    var playersTurn = turnChecker();
    $("#turnName").text(playersTurn);
  });



//Hold Buttons
  $("#hold").click(function(event){
    event.preventDefault();
    console.log(player1);
    if (player1.turn === true) {
      var p1Score = player1.hold();
      $(".player1 * #totalScore").text(p1Score);
      player1.win();
    } else {
      var p2Score = player2.hold();
      $(".player2 * #totalScore").text(p2Score);
      player2.win();
    }
    var playersTurn = turnChecker();
    $("#turnName").text(playersTurn);
  });


});
