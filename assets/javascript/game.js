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

var images = ["assets/images/big-green.jpg", "assets/images/blue.png", "assets/images/red-cry.png", "assets/images/purp.jpg"]
// for(i = 0; i < images.length; i++){

//     $("#crystal-container").append("<img src= '" + images[i] + "'/>")
// }
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
    createCrystals();
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

function createCrystals() {
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


$("#crystal-container").on("click", ".crystal", function(){
    
    // Create a click event
    //     Grab the value of the crystal that was clicked on
    var cv = $(this).attr("cv");
    
    //     Add that value to the player’s score
    userScore = cv + userScore;
    //     Call the win/loss function
    winlose();
console.log(cv);
})
