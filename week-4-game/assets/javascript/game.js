//initialize variables
	//randomize computerGenerateChoice number to fall between 19-120
	var computerGeneratedChoice = (Math.floor(Math.random() * 101) + 19);
	//intialize win, loss, and Total Score to 0
	var winCount = 0;
	var loseCount = 0;
	var yourTotalScore = 0;
	//make each gem generate a random number (1-12). hide this number
	var gem1Choice = (Math.floor(Math.random() * 12) + 1);
	var gem2Choice = (Math.floor(Math.random() * 12) + 1);
	var gem3Choice = (Math.floor(Math.random() * 12) + 1);
	var gem4Choice = (Math.floor(Math.random() * 12) + 1);

//update the wins on score and set up alert
function playGame(){
	if(yourTotalScore === computerGeneratedChoice){
		winCount++;
		$('#winCounts').text(winCount);
		$('#winsAndLosses').text('You rock (literally!)');
		reset();
	

//if loss, update the losses and set up alert
} else if(yourTotalScore > computerGeneratedChoice){
		loseCount++;
		$('#loseCounts').html(loseCount);
		$('#winsAndLosses').text('You lose!');
		reset();
	}
}

$('#numberGenerated').text(computerGeneratedChoice);

//set up clicks for each gem. the number will add to the total score
$('#gem1').on('click', function(){
	yourTotalScore += gem1Choice;
	$('#yourCurrentScore').text(yourTotalScore);
	playGame();
});


$('#gem2').on('click', function(){
	yourTotalScore += gem2Choice;
	$('#yourCurrentScore').text(yourTotalScore);
	playGame();
});


$('#gem3').on('click', function(){
	yourTotalScore += gem3Choice;
	$('#yourCurrentScore').text(yourTotalScore);
	playGame();
});


$('#gem4').on('click', function(){
	yourTotalScore += gem4Choice;
	$('#yourCurrentScore').text(yourTotalScore);
	playGame();
});


//reset the game
function reset () {
	//reset the computerGeneratedChoice to a random number
	computerGeneratedChoice = (Math.floor(Math.random() * 101) + 19);
	$('#numberGenerated').text(computerGeneratedChoice);
	//reset the total score back to 0
	yourTotalScore = 0;
}
