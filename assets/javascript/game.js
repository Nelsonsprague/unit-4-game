// Option 1 Game design notes

// Create variables to track

// Wins counter
var wins = 0;
// Losses counter
var losses = 0;
// Goal for the round (random number)
var goal;
// Score
var userScore;
// Values of each crystal
var crystalValue= [Math.round(Math.random()* 12 +1)];

var images = ["assets/images/big-green.jpg", "assets/images/blue.png", "assets/images/red-cry.png", "assets/images/purp.jpg"]
// for(i = 0; i < images.length; i++){

//     $("#crystal-container").append("<img src= '" + images[i] + "'/>")
// }
// Create a function to start/reset the game
function newGame(){

    //     Update win and loss counter text
    // wins = 0;
    $("#wins").text(wins);
    // losses = 0;
    $("#losses").text(losses);
    //     Pick a new goal (new random number)
    goal = Math.round(Math.random() * 100 + 1);
    goal = parseInt(goal);
    $("#goal").text(goal);
    //     Update this on the page
    console.log(goal);

    //     Create 4 new values for the 4 crystals
    //     Assign 4 new values for the 4 crystals
    createCrystals();
    //     Reset score back down to 0
    userScore = 0;
    userScore = parseInt(userScore);
    $("#userscore").text(userScore);
    //     Update the score text on the page
}

function winlose(){
if(userScore === goal){
    // Create a function to test win/lose
    //     If the player’s score === the goal
    //         Wins++
wins ++;

$("#wins").text(wins);
    //     Call reset function
    newGame();
}if (userScore > goal){

    //     If the player’s score is > the goal
    //         Losses++
    losses ++;
    $("#losses").text(losses);
    // Call reset function
    newGame();
}
}

function createCrystals() {
    $("#crystal-container").empty();
    for (var i = 0; i < images.length; i++) {
        var div = $("<img>");
        div.attr("src", images[i])
        div.attr("cv", Math.round(Math.random()* 12 +1));
        div.addClass("crystal");
        div.attr("id", i + 1);
        $("#crystal-container").append(div);
    }
}

createCrystals();
newGame();


$("#crystal-container").on("click", ".crystal", function(){
    
    // Create a click event
    //     Grab the value of the crystal that was clicked on
    var cv = $(this).attr("cv");
    cv = parseInt(cv)
    //     Add that value to the player’s score
    userScore = cv + userScore;
    $("#userscore").text(" " + userScore);
    //     Call the win/loss function
    winlose();
console.log(cv);
console.log(userScore);
})
