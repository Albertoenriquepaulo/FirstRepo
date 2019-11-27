//3 ways to define a JavaScript class

//1. Using a function
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
 
// anti-pattern! keep reading...
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}

//To instantiate an object using the Apple constructor function, set some properties and 
//call methods you can do the following:
var apple = new Apple('macintosh');
apple.color = "reddish";
console.log(apple.getInfo());

//------------------------------------------------------------------------------------------
//1.1. Methods defined internally
//Using this syntax changes nothing in the way you instantiate the object and use its 
//properties and methods.
function Apple1 (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}

var apple1 = new Apple1('macintosh');
console.log(apple1.getInfo());

//------------------------------------------------------------------------------------------
//1.2. Methods added to the prototype
//A drawback of 1.1. is that the method getInfo() is recreated every time you create a new object. 
//Sometimes that may be what you want, but it's rare. A more inexpensive way is to add getInfo() 
//to the prototype of the constructor function.
//Again, you can use the new objects exactly the same way as in 1. and 1.1.
function Apple2 (type) {
    this.type = type;
    this.color = "red";
}
 
Apple2.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};
var apple2 = new Apple2('macintosh2');
console.log(apple2.getInfo());

//------------------------------------------------------------------------------------------
//2. Using object literals
//In this case you don't need to (and cannot) create an instance of the class, it already 
//exists. So you simply start using this instance.
var apple3 = {
    type: "macintosh3",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}

apple3.color = "reddish3";
console.log(apple3.getInfo());

//------------------------------------------------------------------------------------------
//3. Singleton using a function
//Again with the singleton, eh? 🙂
//The third way presented in this article is a combination of the other two you already saw. 
//You can use a function to define a singleton object. Here's the syntax:
//So you see that this is very similar to 1.1. discussed above, but the way to use the object 
//is exactly like in 2.
var apple4 = new function() {
    this.type = "macintosh4";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}

apple4.color = "reddish4";
console.log(apple4.getInfo());

//new function(){...} does two things at the same time: define a function
//(an anonymous constructor function) and invoke it with new

//------------------------------------------------------------------------------------------
//Create JavaScript Object with create method
//Object.create() allowed to create object with more atrribute options like configurable, 
//enumerable, writable and value as shown below

let car = Object.create(Object.prototype,
  {
    name:{
      value: 'Fiesta',
      configurable: true,
      writable: true,
      enumerable: false
    },
    maker:{
      value: 'Ford',
      configurable: true,
      writable: true,
      enumerable: true
    }
  });
  console.log(car.name)    //Output: Fiesta

//------------------------------------------------------------------------------------------
// Create JavaScript Object using ES6 classes
// ECMAScript 6 (newer version of javascript) supports class concept like any other Statically 
//typed or object oriented language. So, object can be created out of a class in javascript as 
//well as shown below
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }
}
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
console.log(bike1.name);    //Output: Hayabusa
console.log(bike2.maker);   //Output: Kawasaki

//------------------------------------------------------------------------------------------
//Methods to the JavaScript class
//Methods can be part of class while declaration or can be added later to the created object 
//as shown below

class Vehicle1 {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }  start() {
    console.log("Starting...");
  }
}
let bike = new Vehicle1('Hayabusa', 'Suzuki', '1340cc');
bike.start();    //Output: Starting.../* Adding method brake() later to the created object */
bike.brake = function() {
  console.log("Applying Brake...");
}
bike.brake();    //Output: Applying Brake...



class Operacion{
	//let result;
	constructor(num1,num2){
		this.num1 = num1;
		this.num2 = num2;
		let result = 0;
		//this.result = 0;
	}

	suma(){
		this.result = this.num1 + this.num2;
		return (this.result);
	}
	resta(){
		this.result = this.num1 - this.num2;
		return (this.result);
	}
}

let operar = new Operacion(2,3);
console.log(operar.suma());

class Operacion1{
	//let result;
	suma(num1, num2){
		return (num1 + num2);
	}
	resta(num1, num2){
		return (num1 - num2);
	}
}

let operar1 = new Operacion1();
console.log(operar1.resta(2,5));

function Operation () {
    this.multiplica = function(n1, n2) {
        return n1 * n2;
    };
    this.divide = function(n1, n2) {
    	if(n2!=0){
    		return n1/n2;	
    	}else{
    		return 'Error, intento de dividir entre cero';
    	}
        
    };
}

let Op = new Operation();
console.log(Op.multiplica(2,5));
console.log(Op.divide(2,3));
