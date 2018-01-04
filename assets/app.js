console.log("hot poppers!");

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const words = ["the quick brown fox jumps over the lazy dog","the lazy dog jumps over the quick brown fox"];

const images = [];

let guessed = [];

let chances = 10;

let toGuess = "";


// Chooses a new word 

function getWord(){

	return words[Math.floor(Math.random() * 1)];

}

// Renders the word

function renderWord(){

	let display = ""
	for( let i = 0 ; i < toGuess.length ; i ++ ){

		if(guessed.indexOf(toGuess[i]) === -1 && toGuess[i] !== " "){

			display += "_";

		} else {

			display += toGuess[i];	

		}

	}

	$("#selector").text(display);

}

// Creates new letter buttons

function newLetter(letter){

	return $("<button>").addClass("btn btn-primary").attr("id",letter).text(letter.toUpperCase());

}

// Changes buttons

function dangerLetter(letter){

	$("#" + letter).removeClass("btn-primary").addClass("btn-danger");

}

// Resets all letters to "btn-primary"

function resetLetters(){

	for(let i = 0 ; i < guessed.length ; i++){

		$("#" + guessed[i]).removeClass("btn-danger").addClass("btn-primary");

	}

}

// Appends all the letters

for(let i = 0 ; i < alphabet.length ; i++){

	newLetter(alphabet[i]).appendTo("#letter-test");

}

toGuess = getWord();

document.addEventListener("keyup",function(e){

	if(/[a-zA-Z]/.test(e.key) && e.key.length === 1 && guessed.indexOf(e.key.toLowerCase()) === -1){
		guessed.push(e.key);
		dangerLetter(e.key.toLowerCase());
	}

});
