var score1 = 90;
var score1 = 95;
var highscore1 = 75;
var highscore2 = 95;
var comparison = (score1 + score2) > (highscore1 + highscore2);
var el = document.getElementById('answer');
el.textContent = 'new high score: ' + comparison;

