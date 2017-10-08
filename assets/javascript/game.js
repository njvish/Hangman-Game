//Variables

var	wordList = ["shark", "dolphin", "whale", "turtle", "seal", "eel"]
var wordSelected = "";
var wordLetters =[];
var blanks = 0;
var correctLetter =[];
var wrongLetter =[];
var guessesLeft = 14;
var winCount = 0;
var lossCount = 0;
var letterInWord = [];
//Functions

function selectWord() {
	wordSelected = wordList[Math.floor(Math.random() * wordList.length)];
	wordLetters = wordSelected.split("");
	blanks = wordLetters.length;


	guessesLeft = 14;
	wrongLetter = [];
	correctLetter = [];

	for (var i = 0; i < blanks; i++) {
		correctLetter.push("_");
	}
	
	document.getElementById("animal").innerHTML = correctLetter.join(" ");
	document.getElementById("numGuess").innerHTML = guessesLeft;
	document.getElementById("numWin").innerHTML = winCount;
	document.getElementById("numLoss").innerHTML = lossCount;


}

function checkLetters(letter) {

	
	var letterInWord = false;
	for (var i = 0; i < blanks; i++) {
		if(wordSelected[i] === letter) {
			letterInWord = true;
		}
	}
	if (letterInWord) {
		for (var i = 0; i < blanks; i++) {
			if(wordSelected[i] === letter) {
				correctLetter[i] = letter;
			}
		}
	}	

	else {
		wrongLetter.push(letter);
		guessesLeft--
	}
	console.log(correctLetter);
}		

function finish(){

	document.getElementById("numGuess").innerHTML = guessesLeft;
	document.getElementById("animal").innerHTML = correctLetter.join(" ");
	document.getElementById("usedLetters").innerHTML = wrongLetter.join(" ");

	if (letterInWord.toString() === correctLetter.toString()) {
		winCount++;
		alert("Huzzah!");

		document.getElementById("numWin").innerHTML = winCount;

		selectWord();
	}

	else if (guessesLeft === 0) {
		lossCount++;
		alert("Boo Hoo!");
	
		document.getElementById("numLoss").innerHTML = lossCount;

		selectWord();
	}
			
}

//Process
selectWord();

document.onkeyup = function(event) {
	var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuess);
	finish();

	console.log(letterGuess);
}





