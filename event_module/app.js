const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//create listener
eventEmitter.on('tutorial', (num1, num2)=>{
	console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter{
	constructor(name){
		super();
		this._name = name;

	}

	get name(){
		return this._name;
	}
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');

christina.on('name', ()=>{
	console.log('my name is ' + christina.name);
})

pedro.on('name', ()=>{
	console.log('my name is ' + pedro.name);
});

//Event is Synchronous i.e. blocking
//Pedro emits an event, calling its listener, and triggering the function
//Aysnchronous i.e. non-blocking would mean that the event would trigger but flow will not necessarily wait for it to complete.
pedro.emit('name');
christina.emit('name');
