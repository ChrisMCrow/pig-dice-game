//Business logic
function NumberCheck(roll){
  if(roll ===1){alert("Your turn is Over!!")}
}



$(document).ready(function(){
  $("#Player1 button#roll").click(function(event){
    event.preventDefault();

  var thisRoll = Math.floor((Math.random() * 6) + 1);
  $("#diceRoll").text(thisRoll);

  NumberCheck(thisRoll);


});


})
