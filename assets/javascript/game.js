var country = ['japan', 'china', 'belgium', 'brazil', 'cuba', 'senegal', 'colombia', 'turkey', 'greece', 'canada', 'france', 'italy'];
var lives = 12;
var wins = 0;
var wordToGuess = [];

remaining = document.getElementById("remaining");
remaining.innerHTML = 'Guesses Remaining: ' + lives;

score = document.getElementById("score");
score.innerHTML = 'Wins: ' + wins;
