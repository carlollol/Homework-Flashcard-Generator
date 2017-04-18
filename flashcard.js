// Require files
var basicCards = require("./basicCard.js");
var clozeCards = require("./clozeCard.js");
var viewCards = require("./viewCard.js");
var inquirer = require('inquirer');
var fs = require('fs');

// User constructor
function basicCard (front, back) {
	this.front = front;
	this.back = back;
}

// Create or view cards
var createCard = function () {
	inquirer.prompt([
		{
			name: "options",
			message: "Do you want to make cards or view cards? (m/v)"
		}
	]).then(function(response) {
		if (response.options === "m") {
			getCardType();
		}
		if (response.options === "v") {
			viewCards.viewType();
		}
	})	
}

// Asks user whether its a basic card or cloze card
var getCardType = function () {
	inquirer.prompt([
		{
			name: "cardType",
			message: "Would you like to make a Basic Card or a Cloze Card? (b/c)"
		}
	]).then(function(answer) {
		if (answer.cardType === "b") {
			basicCards.createBasicCard();
		}
		if (answer.cardType === "c") {
			clozeCards.createClozeCard();
		}
 	});
};

createCard();


