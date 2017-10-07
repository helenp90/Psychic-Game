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
var guessedLetters = event;
var letterToGuess = [];


//Functions for back-end workings of the game.
document.onkeyup = function (event) {
  var guesses = event.key;
  guessesLeft = guessesLeft - 1;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("guessed").innerHTML = guesses;
  if (guesses === letterToGuess) {
    wins();
  } else if (guessesLeft - 1 === 0) {
    console.log(guessesLeft);
    lost();
  } else {
    display();
    console.log(guessedLetters);
  }

}

// Function to have the guesses displayed
function display() {
  var guessLeft = document.getElementById("guessesLeft");
  var guessedLetters = document.getElementById("guessed");
  guessLeft.innerHTML = guessesLeft;
  guessedLetters.innerHTML = guesses;
}

// Outcomes of the game/ calls from line 20.
function wins() {
  wins++;
  document.getElementById("wins").innerHTML = wins;
  resetGame();
}

function lost() {
  losses++;
  document.getElementById("losses").innerHTML = losses;
  resetGame();
}
// Function to reset the game.
function resetGame() {
  guessesLeft = 7;
  guessedLetters = [];
}