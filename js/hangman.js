/*
    author: ri-ca4
    date: 7/22
    title: hangman game
*/

//TODO: this needs to be a function to be called on button push
var wordDisp = document.getElementById('word');
var playerWord = prompt('player 1 enter word');
//TODO: validate that it is a single word with no symbols or spaces, and to uppercase


for(i=0; i<playerWord.length; i++){ //create "blanks"
    wordDisp.innerHTML += '<div class="letter" id="' + playerWord[i] + '">-</input>';
}

var letters = playerWord.split('');//create letters array
console.log(letters)


var btn = document.getElementById('enter');
btn.addEventListener('click', () =>{//validate that a single letter has been provided
    var guess = document.getElementById('guess').value
    var regex = new RegExp("[a-zA-Z]");
    if(regex.test(guess)){
        //alert("true");
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
            console.log(guess + " is part of " + playerWord)
            document.getElementById(guess).innerHTML = guess;//display letter
            
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
