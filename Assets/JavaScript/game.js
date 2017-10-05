//Letter choices available
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = [];



//Lets the computer select a random letter from the available choices

//Displaying the guessed letters
document.onkeyup = function (event) {
  var guesses = event.key;
  if (guesses === letterToGuess) {
    wins();
  } else(guessesLeft - 1 === 0)
  lost();

  display();
}

// Function to have the guesses displayed
function display() {
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("losses");
  var guessLeft = document.getElementById("guessLeft");
  var guessedLetters = document.getElementById("guessed");
  winsP.innerHTML = wins;
  losesP.innerHTML = losses;
  // these are bringing up errors in the console. Not sure I know why.
  guessLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(',');
}

function win() {
  wins++;
  resetGame();
}

function lost() {
  losses++;
  resetGame();
}
// Generates the random number.
function resetGame() {
  guessesLeft = 7;
  guessedLetters = [];
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("letter to guess: " + letterToGuess);
}