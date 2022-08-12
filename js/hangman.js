/*
    author: ri-ca4
    date: 7/22
    title: hangman game
*/

//TODO: this needs to be a function to be called on button push
var wordDisp = document.getElementById('word');
//get word
var playerWord = prompt('player 1 enter word');
//TODO: validate that it is a single word with no symbols or spaces, and to uppercase 
//create "blanks"
for(i=0; i<playerWord.length; i++){
    wordDisp.innerHTML += '<div class="letter" id="' + playerWord[i] + '">-</input>';
}

var btn = document.getElementById('enter');
btn.addEventListener('click', () =>{
    var guess = document.getElementById('guess').value
    var regex = new RegExp("[a-zA-Z]");
    if(regex.test(guess)){
        alert("true");
        check();
        }else{
            alert("please input 1 letter");
    }
})

function check(){
    alert("check")
}
//check input
//has the letter been used?
//is the letter part of the word?
//display if y, add strike if no

//strike out

//win