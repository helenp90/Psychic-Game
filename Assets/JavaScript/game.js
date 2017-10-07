//Letter choices available
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Computer Generated random letters.
letterToGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("letter to guess: " + letterToGuess);

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 7;
var guessedLetters ;
var letterToGuess = [];



//Lets the computer select a random letter from the available choices

//Functions for back-end workings of the game.
document.onkeyup = function (event) {
  var guesses = event.key;
  guessesLeft = guessesLeft - 1;
  guessedLetters = display();
  if (guesses === letterToGuess) {
    wins();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    display();
  }

}

// Function to have the guesses displayed
function display() {
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("losses");
  var guessLeft = document.getElementById("guessesLeft");
  var guessedLetters = document.getElementById("guessed");
  winsP.innerHTML = wins;
  losesP.innerHTML = losses;
  // these are bringing up errors in the console. Not sure I know why.
  guessLeft.innerHTML = guessesLeft;
  guessedLetters.innerHTML = guessedLetters ;
}

// Outcomes of the game/ calls from line 20.
function wins() {
  wins++;
  resetGame();
}

function lost() {
  losses++;
  resetGame();
}
// Function to reset the game.
function resetGame() {
  guessesLeft = 7;
  guessedLetters = [];
}