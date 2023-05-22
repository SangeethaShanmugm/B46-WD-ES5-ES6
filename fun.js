//scope - lifetime of a variable
//let, const  - block scope
//block - {}
//var - function scope
{
  let y1 = 10;
  var y2 = 20;
}

console.log(y2); //Uncaught ReferenceError: y1 is not defined

//not defined(error) vs undefined(value)

//can a block hold var or will it leak outside?=> it will leak outside

//Lexical scope and hoisting

var price = 1000; //Pant//Shadowing

function getPrice() {
  console.log("The old price is", price); //undefined
  var price = 500; //MSD
  console.log("The new price is", price); //500
}
getPrice();

console.log(a); //undefined
//1000 lines
var a = 50;
console.log(a); //50

//JS - Does compilation happens? Yes
//JIT - Just In Time Compilation
//1. Compilation Phase
//2. Execution Phase

//JS & Context

//1. Compilation Phase

console.log(a); //Skip
var a = 50; //JS -> Do you know a? No | What is value? -> Context -  undefined
console.log(a); // Skip

//2. Execution Phase

console.log(a); //JS -> Do you know a? Yes | What is value? -> Context -  undefined
var a = 50; //JS -> Do you know a? Yes | What is value? -> Context -  Note down - a-> 50
console.log(a); //JS -> Do you know a? Yes | What is value? -> 50

//ex-2

//1. Compilation Phase

// console.log(a1); //skip
// let a1 = 50; //JS -> Do you know a1? No | What is value? -> Context- dont initialize
// console.log(a1); //skip

//2. Execution Phase

// console.log(a1) //JS -> Do you know a1? yes | What is value? -> Context- Error
// let a1 = 50
// console.log(a1)

const avenger = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰",
  power: "🤖",
  phrase: "Happy Day",
};

const {
  name,
  networth,
  power = "💿",
  skill = ["genius", "billionaire", "philanthropist"],
} = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰",
  power: "🤖",
  phrase: "Happy Day",
};

console.log(networth, power, skill); //💰💰💰 🤖 (3) ['genius', 'billionaire', 'philanthropist']
//networth = 💰💰💰
//power = 🤖,
// skill= ["genius", "billionaire", "philanthropist"]

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰",
  power: "🤖",
  phrase: "Happy Day",
};
console.log("Avg", avg);
const avg1 = { ...avg, nation: "India", power: "💿" };

console.log("Avg1", avg1);
// name: "Tony Stark",
// house: "🏠",
// networth: "💰💰💰",
// power: "💿",
// phrase: "Happy Day",
// nation: "India"

const avg2 = { nation: "India", power: "💿", ...avg };
console.log(avg2);

// nation: "India",
// name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰",
//   power: "🤖",
//   phrase: "Happy Day",

const movie = {
  name: "frozen",
  year: "2020",
  budget: "150crore",
};
const m1 = { ...movie, budget: "200crore" };
console.log(m1);

const m2 = { budget: "200crore", ...movie };
console.log(m2);

// name: "frozen",
// year: "2020",
// budget: "150crore",

//Shorthand - same key name and value name

const age = 20;
const batch = "B46WD";
const mark = 90;

const student = {
  name: "Prashanthi",
  age: age,
  batch: batch,
};
console.log(student);

//object shorthand

const student1 = {
  name: "Prashanthi",
  age,
  batch,
  score: mark,
};
console.log(student1);
