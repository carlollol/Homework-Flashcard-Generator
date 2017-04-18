// Require files
var basicCards = require("./basicCard.js");
var clozeCards = require("./clozeCard.js");
var fs = require('fs');
var inquirer = require('inquirer');

// Export function to flashcard.js
module.exports.viewType = function () {
	inquirer.prompt([
		{
			name: "type",
			message: "View Basic cards / Cloze Cards? (b/c)"
		}
	]).then(function(answer) {
		if (answer.type === "b") {
			fs.readFile("basicCardLog.txt", "utf-8", function (err, data) {
				var deckArr = data.split(";");
				for(var i = 0; i < (deckArr.length - 1); i++) {
					var currentCard = deckArr[i].split(",");
					var front = currentCard[0];
					var back = currentCard[1];
					console.log("Front: " + front);
					console.log("Back: " + back);
				}
			});
		}
	})
}