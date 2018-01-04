console.log("hot poppers!");

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const words = ["the quick brown fox jumps over the lazy dog","the lazy dog jumps over the quick brown fox"];

let guessed = [];

function newLetter(letter){

	return $("<button>").addClass("btn btn-primary").attr("id",letter).text(letter.toUpperCase());

}

function dangerLetter(letter){

	$("#" + letter).removeClass("btn-primary").addClass("btn-danger");

}

// Appends all the letters

for(let i = 0 ; i < alphabet.length ; i++){

	/* NEED SELECTOR FOR ALPHABET */

	newLetter(alphabet[i]).appendTo("#letter-test");
	

}

document.addEventListener("keyup",function(e){

	if(/[a-zA-Z]/.test(e.key) && e.key.length === 1){
		console.log(e.key);
		dangerLetter(e.key.toLowerCase());
	}

});
