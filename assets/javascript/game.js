var country = ['japan', 'china', 'belgium', 'brazil', 'cuba', 'senegal', 'colombia', 'turkey', 'greece', 'canada', 'france', 'italy'];
var lives = 12;
var wins = 0;

remaining = document.getElementById("remaining");
remaining.innerHTML = 'Guesses Remaining: ' + lives;

score = document.getElementById("score");
score.innerHTML = 'Wins: ' + wins;

var word = country[Math.floor(Math.random() * country.length)];

var wordToGuess = [];
for (var i = 0; i < word.length; i++) {
    wordToGuess[i] = "_";
}

var mysteryWord = document.getElementById('word');
mysteryWord.innerHTML = wordToGuess.join(" ");
