/*
    author: ri-ca4
    date: 8/22
    title: hangman game
*/

let wordPrompt = document.getElementById('wordPrompt');
let gameBoard  = document.getElementById('gameBoard');
let wordDisp   = document.getElementById('word');
let wordBtn    = document.getElementById('subWord');
let guessBtn   = document.getElementById('subGuess');
let wordInput  = document.getElementById('wordInput');
let guessInput = document.getElementById('guess');
let box        = document.getElementById('box');
let hangman    = document.getElementById('hangman');
let marks      = document.getElementsByClassName('strike');

var playerWord;
var letters;
var guesses = [];
var strikes = 0;

gameBoard.style.visibility = "hidden";

wordInput.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        wordBtn.click();
    }
})

wordBtn.addEventListener('click', () => {//word input
    var word = wordInput.value;
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

guessInput.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        guessBtn.click();
    }
})

guessBtn.addEventListener('click', () =>{//validate that a single letter has been provided
    var guess = guessInput.value
    var regex = /[a-zA-Z]/;
    if(regex.test(guess)){
        guess = guess.toUpperCase();
        check(guess);
        }else{
            alert("please input 1 letter");            
    }
})

function check(guess){//check input
    if(guesses.includes(guess)){//has it been guessed already?
        alert(guess + " has already been guessed");
        guessInput.value = '';
    }else{//add letter to guesses array, check if letter is in word
        guesses.push(guess);
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
            guessInput.value = '';
        }else{//add letter to box and strike
            box.innerHTML += '<div class="incorrect">' + guess + '</div>'
            strike()
        }
    }
}

function strike(){
    strikes = strikes + 1;
    if(strikes === 6){
        loss();
    }else{
        document.getElementById(`strike${strikes}`).style.visibility = "visible";
        guessInput.value = '';
    }
}

function win(){
    alert("winner!");
    reset()
    //win
}

function loss(){
    alert('you lost');
    reset()
    //loss
}

function reset(){//clear values and visibility
    playerWord = '';
    letters = [];
    guesses = [];
    strikes = 0;
    wordPrompt.style.visibility = "visible";
    gameBoard.style.visibility = "hidden";
    wordDisp.innerHTML = '';
    box.innerHTML = '';
    wordInput.value = '';
    guessInput.value = '';
    for(i=0; i<marks.length; i++){
        marks[i].style.visibility = "hidden";
    }
}