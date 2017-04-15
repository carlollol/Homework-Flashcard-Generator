var inquirer = require('inquirer');
var fs = require('fs');
var admin = require('./admin.js');
var moment = require('moment');
var weatherApp = require("./weather.js");
var weather = require("weather-js");

// User constructor
function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

function ClozeCard (text, cloze)

User.prototype.deletedText = function () {
	fs.appendFile('log.txt', "Name: " + this.name + " " + "Location: " + this.location + " " + "(" + moment().format('MMMM Do YYYY, h:mm:ss a') + ")" + ",\n" , function (err,data) {
		console.log("log is updated");
	});
}

//prompts for user or admin
var createCard = function () {
	inquirer.prompt([
		{
			name:"create",
			message: "Create card? (y/n)"
		},
	]).then(function(answer){
		if(answer.create === "a") {
			//prints data from log.txt
			fs.readFile('log.txt', 'utf-8', function (err, data) {
				console.log(data);
			})
		}
		else if (answer.person === "u") {
			//Prompts for new user info
			inquirer.prompt([
				{
					name: "name",
					message: "What is your name?"
				},
				{
					name: "location",
					message: "Weather for what location?"
				}
			]).then(function(userInfo) {
				// creates new user
				var newUser = new User (userInfo.name, userInfo.location);
				weatherApp.getWeather(userInfo.location);
				newUser.logData();
			});
		}
	})	
}		



userOrAdmin();