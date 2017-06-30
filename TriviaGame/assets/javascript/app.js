// //begin the game with by pressing the start button
// document.onkeyup = function(event){
	$("#start").on("click", function(){
	console.log("start the game");
	populate();

})

//CONSTRUCT CLASSES//
//object constructor for questionText, choices, and answer
function Question(text, choices, correctAnswer) {
	this.text = text;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}

//create a function for correct/wrong answer
Question.prototype.checkAnswer = function(choice) {
	if(choice===this.correctAnswer) {
    	return true;
 	} else {
   		return false;
	}
};

//QUIZ CONTROLLER//
function trivia(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

///create a function to determine the index of the question
trivia.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}

//check if quiz has ended or not
trivia.prototype.isEnded = function () {
	return this.questions.length===this.questionIndex;
}

//check if selected answer is the correct or not 
trivia.prototype.guess = function(answer) {
	this.questionIndex++;

	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}
}

//MAIN

function populate () {
	if(trivia.isEnded()) {
		//showScores();
	}
	else {
		//show question
		var element = document.getElementById("questions");
		var opt1 = document.getElementById("btn1");
		var opt2 = document.getElementById("btn2");
		var opt3 = document.getElementById("btn3");
		var opt4 = document.getElementById("btn4");
		
		for (var i = 0; i < questions.length; i++) {
		element.append(questions[i].Options1);
		opt1.append(question[i].Options1);
		console.log(questions[i].Question2);
		//this forloop will not work
	}
}
}

//create array of questions, answers
var questions = [
	{
		Question1: "What is the name of the Annual Flip Cup Tournament?", 
		Options1:["Flipcupalooza", "Flipadelphia", "Drinkapalooza", "PhillyDrinkOff"], 
		CorrectAns1: "Flipadelphia"},
	{
		Question2: "hat was Sweet Dee's Nickname in High School?",
		Options2: ["Aluminum Monster", "Bird", "Nerd", "Brace Face"],
		CorrectAns2: "Aluminum Monster"}

// 	newQuestion("Who plays the Nightman on the episode, The Nightman Cometh?", [Dennis, Mac, Frank, Charlie], "Mac"),
// 	newQuestion("What is The Waitress’s Name?", [Dee, Lisa, Margaret, We Don’t Know], "We don't Know"),
// 	newQuestion("What is Charlie's area of legal expertise?", [Family Law, Entertainment Law, Cheese Law, Bird Law], "Bird Law")
];
console.log(questions[0].Question1);

//populate the questions
var trivia = new trivia(questions);

//capture wins, losses

//have timer initiate the next question





