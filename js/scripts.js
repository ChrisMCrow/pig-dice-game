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
  if (this.score >= 20) {
    $(".results").prepend(this.name + " WINS!")
    $(".results").fadeIn();
    return true
  }
}

function turnChecker() {
  if (player1.turn === true) {
    $("div.player1").addClass("playersTurn");
    $("div.player2").removeClass("playersTurn");
    return player1.name
  } else if (player1.turn === false && player2.name) {
    $("div.player2").addClass("playersTurn");
    $("div.player1").removeClass("playersTurn");
    return player2.name
  } else {
    return alert("Please press start")
  }
}


function scoreTally(roll) {
  if (roll === 1) {
    turnScore = 0;
    $("#turnScore").text("0");
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
    if (!player1Name) {player1Name = "Player 1"}
    player1 = new Player(player1Name, true);
    $("#p1form").hide();
    $(".startGame").hide();
    $(".turnHeader").show();
    $("#turnName").text(player1.name);
    $("#p1header").text(player1Name);
  });

  $("#p2form").submit(function(event) {
    event.preventDefault();
    var player2Name = $("#p2name").val();
    if (!player2Name) {player2Name = "Player 2"}
    player2 = new Player(player2Name, false);
    console.log(player2);
    $("#p2form").hide();
    $("#p2header").text(player2Name);
  });

//Roll Buttons
  $("#roll").click(function(event){
    event.preventDefault();
    var thisRoll = Math.floor((Math.random() * 6) + 1);
    $("#diceRoll").empty();
    $("#diceRoll").append("<img src='img/dice" + thisRoll + ".svg' height=100px>");
    var currentTurnScore = scoreTally(thisRoll);
    $("#turnScore").text(currentTurnScore);
    $("#turnName").text(turnChecker());
  });



//Hold Buttons
  $("#hold").click(function(event) {
    event.preventDefault();
    console.log(player1);
    if (player1.turn === true) {
      var p1Score = player1.hold();
      $(".player1 * #totalScore").text(p1Score);
      $("#turnScore").text("0");
      player1.win();
    } else {
      var p2Score = player2.hold();
      $(".player2 * #totalScore").text(p2Score);
      $("#turnScore").text("0");
      player2.win();
    }
    $("#turnName").text(turnChecker());
  });

  $(".results").click(function() {
    document.location.reload();
  })


});
