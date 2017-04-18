// Require files
var fs = require('fs');
var inquirer = require('inquirer');

//Basic Card Constructor
function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

//Prototype for BasicCard
BasicCard.prototype.logCard = function () {
	fs.appendFile('basicCardLog.txt', this.front + "," + this.back + ";");
	console.log("You've added a basic card!");
}

var basicStack = [];

// Export function to flashcard.js
module.exports.createBasicCard = function () {
	inquirer.prompt([
		{
			name: "front",
			message: "Insert data to front of the card?"
		},
		{
			name: "back",
			message: "Insert data to the back of the card?"
		}
	]).then(function(contents) {
		var newCard = new BasicCard (contents.front, contents.back);
		newCard.logCard();
	})
}