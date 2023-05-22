//class- blueprint of the object
//from the class we can create object
//this - to access property of object

//object - {} = {K:V}

//creating class
// class className{
//    constructor(properties) {
//       this.property = property
//}
// }

// creating object  - const objectName = new ClassName()

//constructor function

function Person() {
  (this.name = "John"), (this.age = 20);
}

//create an object
const person1 = new Person();

//creating a class
class PersonData {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//create an object
const person2 = new PersonData("John", "25");
const person3 = new PersonData("Jack");
const person4 = new PersonData("Peter");

console.log(person2);
console.log(person4.name);

//this

let firstName = "Gokul";
let lastName = "Karthick";

let SayHi = {
  firstName: "Ajith",
  lastName: "Kumar",
  greet: function () {
    return `Say hi to ${firstName} ${lastName}`;
  },
};

console.log(SayHi.greet()); //Say hi to Gokul Karthick

let firstName1 = "Gokul";
let lastName1 = "Karthick";

let SayHi1 = {
  firstName: "Ajith",
  lastName: "Kumar",
  greet: function () {
    return `Say hi to ${this.firstName} ${this.lastName}`;
  },
};

console.log(SayHi1.greet()); //Say hi to Ajith Kumar

//getter  -> get the value of object -> get methodName()
//setter -> set the value of object  -> set methodName()

class User {
  constructor(name) {
    this.name = name;
  }

  //getter
  get userName() {
    return this.name;
  }
  //setter
  set userName(x) {
    this.name = x;
  }
}

let user1 = new User("Mickenzie");
console.log(user1.name); //Mickenzie

//changing the value of name property
user1.userName = "Peter"
console.log(user1.name); //Peter