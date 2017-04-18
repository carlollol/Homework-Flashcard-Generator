// Require files
var fs = require('fs');
var inquirer = require('inquirer');

//Cloze Card Constructor
function clozeCard (text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

//Prototype for ClozeCard
clozeCard.prototype.deletedText = function () {
	fs.appendFile("clozeCardLog.txt", this.cloze + "-")
}

clozeCard.prototype.partialText = function () {
	console.log(this.text)
} 

clozeCard.prototype.fullText = function () {
	fs.appendFile("clozelog.txt", this.text + ";")
}
//prototype end

// Export function to flashcard.js
module.exports.createClozeCard = function () {
	inquirer.prompt([
		{
			name: "text",
			message: "Insert full text for the card"
		},
		{
			name: "cloze",
			message: "What part of the sentence would you like to hide"
		}
	]).then(function(contents) {
		var newCard = new ClozeCard (contents.text, contents.cloze);
		newCard.deletedText();
		newCard.partialText();
		newCard.fullText();
	})
}