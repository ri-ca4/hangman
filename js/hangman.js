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

wordBtn.addEventListener('click', () => {//word input
    var word = document.getElementById('wordInput').value;
    var regex = /^[A-Za-z]*$/;//make sure it's one word with only letters
    if(regex.test(word)){
        playerWord = word.toUpperCase();//make letters uppercase for consistency
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
    if(guesses.includes(guess)){//has it been guessed already?
        alert(guess + " has already been guessed");
    }else{//add letter to guesses array, check if letter is in word
        guesses.push(guess);
    //TODO:display guesses
        if(letters.includes(guess)){//is the letter part of the word?
            var correct = document.querySelectorAll(`[data-val="${guess}"]`);
            for(i=0; i<correct.length; i++){//fill in "blanks"
                correct[i].innerHTML = guess;
            }
            //check if all letters have been guessed and trigger win
            let checker = (arr, target) => target.every(v => arr.includes(v));
            if(checker(guesses, letters) == true){//Check if all letters have been guessed
                win();
            }    
        }else{
            strike()
        }
    }
}

function strike(){
    strikes = strikes + 1;
    if(strikes === 5){
        loss();
    }
    alert('you have ' + strikes + ' strikes')
}


function win(){
    alert("winner!")
    //win
}

function loss(){
    alert('you lost')
    //loss
}
