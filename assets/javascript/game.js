var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var country = [
  "japan",
  "china",
  "belgium",
  "brazil",
  "cuba",
  "senegal",
  "colombia",
  "turkey",
  "greece",
  "canada",
  "france",
  "italy"
];

restart();

function restart() {
  var lives = 12;
  var wordToGuess = [];
  var incorrectGuesses = [];

  var hiddenWord = country[Math.floor(Math.random() * country.length)];
  console.log(hiddenWord);

  var word = hiddenWord.split("");
  console.log(word);

  for (var i = 0; i < word.length; i++) {
    wordToGuess.push("_");
  }

  console.log(wordToGuess);

  document.querySelector("#word").innerHTML = wordToGuess.join(" ");

  document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    var doubles = incorrectGuesses.includes(userGuess);
    var validKeys = alphabet.includes(userGuess);
    if (doubles) {
      return;
    } else if (!validKeys) {
      return;
    } else {
      game();
    }

    function game() {
      var letterInWord = false;

      if (word.includes(userGuess)) {
        letterInWord = true;
      }

      if (letterInWord) {
        for (var i = 0; i < word.length; i++) {
          if (userGuess === word[i]) {
            wordToGuess[i] = userGuess;
            document.querySelector("#word").innerHTML = wordToGuess.join(" ");
          }
        }
      } else {
        lives--;
        document.querySelector("#remaining").innerHTML = lives;
        incorrectGuesses.push(userGuess);
        console.log(incorrectGuesses);
        document.querySelector(
          "#wrong-guesses"
        ).innerHTML = incorrectGuesses.join(", ");
      }
      if (lives == 0 || !wordToGuess.includes("_")) {
        restart();
      }
    }
  };
}
