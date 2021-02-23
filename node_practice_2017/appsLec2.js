//Create User Object

function User(){
	//this keywork refers the object that is calling it
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life += 1;
		console.log(this.name+" gave one life to "+targetPlayer.name);
	}
	
}


//create 2 users
var Bucky = new User();
var Wendy = new User();
//give name
Bucky.name = "Bucky";
Wendy.name = "Wendy";


console.log("Bucky:"+Bucky.life);
Bucky.giveLife(Wendy);
console.log("Wendy's Life "+Wendy.life);

//give functions to user

User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -=3;
	console.log(this.name+" uppercutted "+targetPlayer.name+" and " +targetPlayer.name +" lost 3 health!!!");
};

Bucky.uppercut(Wendy);
console.log("Wendy's Health is now "+Wendy.life);

//give user magic strength
//can give user properities through prototype

User.prototype.magic = 60;

console.log("Bucky's Magic is now given: "+Bucky.magic);

//7/23/2017

//poor modules don't require ./
//when importing modules, don't add .js
var movies = require('./movies');
movies.pr("Avatar");

