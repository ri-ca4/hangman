/*
    author: ri-ca4
    date: 7/22
    title: hangman game
*/
var wordPrompt = document.getElementById('wordPrompt');
var gameBoard = document.getElementById('gameBoard');
var wordDisp = document.getElementById('word');
var wordBtn = document.getElementById('subWord');
var playerWord;
var letters;

gameBoard.style.visibility = "hidden";

wordBtn.addEventListener('click', () => {
    var word = document.getElementById('wordInput').value;
    var regex = /^[A-Za-z]*$/;
    if(regex.test(word)){
        playerWord = word.toUpperCase();
        console.log(playerWord, 'accepted');
        letters = [...new Set(playerWord.split(''))];//create letters array
        for(i=0; i<playerWord.length; i++){ //create "blanks"
            wordDisp.innerHTML += '<div class="letter" data-val="' + playerWord[i] + '">-</div>';
        }
        gameBoard.style.visibility = "visible";
        wordPrompt.style.visibility = "hidden";
        }else{
            alert("please input 1 word, no spaces or characters");           
        }
})



var guessBtn = document.getElementById('subGuess');
guessBtn.addEventListener('click', () =>{//validate that a single letter has been provided
    var guess = document.getElementById('guess').value
    var regex = /[a-zA-Z]/;
    if(regex.test(guess)){
        guess = guess.toUpperCase();
        check(guess);
        }else{
            alert("please input 1 letter");            
    }
})

var guesses = [];
var strikes = 0;

function check(guess){//check input
    //alert(guess);
    if(guesses.includes(guess)){//has it been guessed already?
        alert(guess + " has already been guessed");
    }else{//add letter to guesses array, check if letter is in word
        guesses.push(guess);
        console.log(guesses)

        if(letters.includes(guess)){//is the letter part of the word?
            console.log(guess + " is part of " + playerWord);
            var correct = document.querySelectorAll(`[data-val="${guess}"]`);
            console.log(correct);
            for(i=0; i<correct.length; i++){
                correct[i].innerHTML = guess
            }
            //Check if all letters have been guessed
        }else{
            console.log(guess + " is not part of " + playerWord)
            strikes = strikes + 1;
            console.log(strikes);
            strike()
        }
    }
}

function strike(){
    alert('you have ' + strikes + ' strikes')
    //strike out
}


function win(){
    alert("winner!")
    //win
}
