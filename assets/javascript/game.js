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
var crystalValue;

// Create a function to start/reset the game
//     Update win and loss counter text
//     Pick a new goal (new random number)
//     Update this on the page
//     Create 4 new values for the 4 crystals
//     Assign 4 new values for the 4 crystals
//     Reset score back down to 0
//     Update the score text on the page

// Create a function to test win/lose
//     If the player’s score === the goal
//         Wins++
//     Call reset function
//     If the player’s score is > the goal
//         Losses++
// Call reset function

// Create a click event
//     Grab the value of the crystal that was clicked on
//     Add that value to the player’s score
//     Call the win/loss function


// IMPORTANT NOTE: the click events on the initial set of .number buttons WILL work... the click events
// on the buttons created by clicking 'Reset Buttons' will NOT work. See below for more info as to why,
// and try out the 'EVENT DELEGATION WAY'

// generates/places four numbered buttons
function createButtons() {
    for (var i = 0; i < 4; i++) {
        var button = $("<button>");
        button.text("button #" + (i + 1));
        button.addClass("number");
        button.attr("id", i + 1);
        $("#buttons").append(button);
    }
}

// this creates the initial set of 4 buttons
createButtons();

// ======================================================================================================

// IMPORTANT NOTE: this click event will work for all .number buttons that were created BEFORE this in
// the JavaScript, like the initial buttons generated in line 13 above... however, remember that
// this function will only be executed once as written. Therefore, when new .number buttons are added to
// the page later on by JavaScript, the click will NOT apply because the click event was run before they
// were created.

// STANDARD CLICK EVENT WAY
// $(".number").on("click", function() {
//     var id = $(this).attr("id");
//     alert("You clicked the button with id " + id);
// });

// ======================================================================================================

// IMPORTANT NOTE: if instead you want to write one click event that will apply to new and future .number
// buttons, you could use this syntax instead. This is called 'event delegation' in JavaScript. Note that 
// the jQuery selector must point to an element on the page that *ALWAYS* exists, and this element must
// also be a parent/container element that wraps around the child elements you wish to set the click
// event on.

// EVENT DELEGATION WAY (uncomment this to see the different behavior)
// $("#buttons").on("click", ".number", function() {
//     var id = $(this).attr("id");
//     alert("You clicked the button with id " + id);   
// });

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
