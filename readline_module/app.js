//adds readline module
const readline = require('readline');
//readline module prompts the user and gets user input
//createInterface takes an object (like a configuration file)
const rl = readline.createInterface({input : process.stdin,
			             output: process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }?`
(userInput) =>{
	console.log(userInput);
});
