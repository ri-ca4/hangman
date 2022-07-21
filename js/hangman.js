/*
    author: ri-ca4
    date: 7/22
    title: hangman game
*/
var wordDisp = document.getElementById('word');
//function get word
var playerWord = prompt('player 1 enter word')

//function display hint
//for length of playerWord create blanks
for(i=0; i<playerWord.length; i++){
    wordDisp.innerHTML += '<div class="letter" id="' + playerWord[i] + '">-</input>';
}

//variable input

//check input
//has the letter been used?
//is the letter part of the word?
//display if y, add strike if no

//strike out

//win