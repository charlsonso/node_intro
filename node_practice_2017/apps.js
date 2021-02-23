var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World\n');
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');

var person = {
	firstName: "Bucky",
	lastName: "Roberts",
	age: 28
};

console.log(person);

function addNumber(a,b){
	return a + b;
}

console.log(addNumber(7,3));

function worthless(){
}
console.log(worthless());
//prints undefined

var printBacon = function(){
	console.log("bacon is healthy, don't believe the doctors!");
};

printBacon();
setTimeout(printBacon,5000);
//call this code in 5 seconds 

function placeAnOrder(order){

	console.log("Customer order:",order);
	cookAndDeliverFood(function(){
		console.log("Delivered food order:",orderNumber);
	});

}

//Simulate a 5 second operation
function cookAndDeliverFood(callback){
	setTimeout(callback, 5000);
}

//Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeanOrder(5);
placeanOrder(6);

var Bucky = {
	printFirstName: function(){
		console.log("My name is Bucky");
		console.log(this===Bucky);
	}
}
Bucky.printFirstName();

function doSomethingWorthless(){
	console.log("\nI am worthless");
	console.log(this===global);
}
doSomethingWorthless();




