// Option 1 Game design notes

// Create variables to track

// Wins counter
var wins;
// Losses counter
var losses;
// Goal for the round (random number)
var goal;
// Score
var userScore;
// Values of each crystal
var crystalValue= [Math.round(Math.random()* 12 +1)];


// Create a function to start/reset the game
function newGame(){

    //     Update win and loss counter text
    wins = 0;
    losses = 0;
    //     Pick a new goal (new random number)
    goal = Math.round(Math.random() * 100 + 1);
    //     Update this on the page

    //     Create 4 new values for the 4 crystals
    //     Assign 4 new values for the 4 crystals
    crystalValue1 = Math.round(Math.random()* 12 +1)
    crystalValue2 = Math.round(Math.random()* 12 +1)
    crystalValue3 = Math.round(Math.random()* 12 +1)
    crystalValue4 = Math.round(Math.random() *12 +1)
    //     Reset score back down to 0
    score = 0;
    //     Update the score text on the page
}
function winlose(){
if(userScore === goal){
    // Create a function to test win/lose
    //     If the player’s score === the goal
    //         Wins++
wins ++;
    //     Call reset function
    newGame();
}if (userScore > goal){

    //     If the player’s score is > the goal
    //         Losses++
    losses ++;
    // Call reset function
    newGame();
}
}

$("#crystal-image").on("click", function(){

    // Create a click event
    //     Grab the value of the crystal that was clicked on
    crystalvalue 
    //     Add that value to the player’s score
    userScore = crystalValue + userScore
    //     Call the win/loss function
    winlose();
})

function createButtons() {
    for (var i = 0; i < 4; i++) {
        var button = $("<button>");
        button.text("button #" + (i + 1));
        button.addClass("number");
        button.attr("id", i + 1);
        $("#buttons").append(button);
    }
}

// ======================================================================================================
$("#buttons").on("click", ".number", function(){
    var id = $(this).attr("id");
        alert("You clicked the button with id " + id);

})
// click event to remove old buttons and create new ones
$("#reset").on("click", function() {
    $("#buttons").empty();
    createButtons();
});
