var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var excluded = ["Meta","Backspace","Enter","Alt","Shift","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Escape","CapsLock", " ",",",".","/",";","'","[","]","=","-","`",'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var wins = 0;
var losses = 0;
var guesses = [];
var guessCounter = 10;
document.querySelector('#guesses-left').innerText = guessCounter;
// Computer picks random letter from alphabet
var computer = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log(computer)
// Main function for game
function psychicGame(event){
    // If the same letter is entered more than once then it will not be pushed to guesses array
    var user = event.key;
    if (guesses.indexOf(event.key) === -1 && excluded.indexOf(event.key) === -1){
        guesses.push(event.key);
        guessCounter--;
    }
    // If user picks correct letter wins go up and game resets, and if user doesn't then game resets and losses go up
    if (user == computer){
        wins++;
        document.querySelector('#wins').innerText = wins;
        guessCounter = 10;
        guesses = [];
        computer = alphabet[Math.floor(Math.random()*alphabet.length)];
        console.log(computer)
    }else if (guessCounter == 0){
        guessCounter = 10;
        losses++;
        document.querySelector('#losses').innerText = losses;
        computer = alphabet[Math.floor(Math.random()*alphabet.length)];
        console.log(computer)
    }
    // When user guesses 10 times guesses array resets
    if (guesses.length == 10){
        guesses = [];
    }
    document.querySelector('#guesses').innerText = guesses;
    console.log(guesses)
    document.querySelector('#guesses-left').innerText = guessCounter;
}
document.onkeyup = psychicGame;

