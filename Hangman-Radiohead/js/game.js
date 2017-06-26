var wordOptions = ["Bodysnatchers", "Reckoner", "Videotape", "Idioteque", "Creep"];

//computer randomly selects word array of word options
var randomWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];

//generate dashes
var randomWordArray = randomWord.split("");
var arrayToDisplay = [];
var remainingGuesses = 4;

function generateDashes (){
	for(var i=0; i<randomWordArray.length;i++) {
		arrayToDisplay.push("-");
	}
};

//display hidden word to user

function generateDisplay(){
	var htmlString="";
	for(var j=0; j<arrayToDisplay.length;j++){
		htmlString+="<p>" + arrayToDisplay[j] + "</p>"
	}
	return htmlString;
};
function newDisplay(){
document.getElementById("display").append = generateDisplay();
}

newDisplay();

function testForWin(){
	for(var t = 0; r<arrayToDisplay.length;t++){
		var isWon = true;
		if(arrayToDisplay[t]==="-"){
			isWon = false;
		}
	}
	return isWon;
};

function checkIfOut(){
	if(remainingGuesses === 0){
		alert("game over");
	}
}
// capture user guess
document.onkeyup = function(event){
	var userGuess = event.key.toLowerCase();

	if(randomWordArray.includes(userGuess)){
		console.log("Yes!");
		for(var a=0; a<randomWordArray.lenth;a++){
			if(randomWordArray[a]===userGuess){
				arrayToDisplay[a] = userGuess;
			}
		};
		newDisplay();
		testForWin();
	}else{
		//if character does not exist,
		console.log("noooo");
		remainingGuesses--;
		//adjust to count of guesses
		checkIfOut();
	}
	
	//player attempts to guess word by guessing characters
	//if character exists,
	//if character does not exist
	//guess counter
};

//limit of guesses


// var wordBank = ["Creep", "Idioteque", "Reckoner", "Bodysnatchers"];
// var gameLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var letterGuessed;
// var wins = 0;
// var wrong = 0;
// var maxTurns = 6;

// // Randomly choose word from wordBank
// 	var randomWord = wordBank [Math.floor(((Math.random()) * wordBank.length))];
// 	console.log (randomWord);
// //Create an array to create underscores for the song name
// 	// var randomWord = wordBank[randomNumber]

// 	var answerArray = [];
// 		for (var i = 0; i < randomWord.length;i++) {
// 			answerArray[i] = "_";
// 			console.log ("_")
// 		document.getElementById("Word").append ("_ ");
// 	}

// // Radiohead.answerString = Radiohead.answerArray.join(" "); 

// // // check if userguess is in the answerArray
// // if ((letterGuessed.userGuess.match(/^[a-z]$/i)))  {


// // //replace letter with underscore
// // var replace = display(gameLetters);

// // //update answer array according to guess. 
// // 	for (var j = 0;j<wordBank.length;j++)
// // 		if (wordBank[j]==letterGuessed) {
// // 			answerArray[j] = letterGuessed;

// // 			remainingLetters--;}


// // // This function is run whenever the user presses a key.
    
// //     document.onkeyup = function(event) {

// // // Determines which key was pressed.
// //       var keyPressed = event.key;


// // //Check if (userGuess) is part of the ASCII code for lower case letters a to z. 
// // 	if ((userGuess.match(/^[a-z]$/i)))  {			
// // 		maxTurns --;
// // 			document.getElementById("macT").innerHTML = Hangman.guessLimit;


