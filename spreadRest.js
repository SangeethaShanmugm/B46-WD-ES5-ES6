//spread operator => ... => expand or spread an array

const a1 = ["My", "name", "is", "Ancy"];

console.log(a1); //["My", "name", "is", "Ancy"]
console.log(...a1); // My name is Ancy

console.log("My", "name", "is", "Ancy"); //My name is Ancy

//copy array elements -> single array
const a2 = ["one", "two"];

const a3 = [...a2, "three", "four"];

console.log(a3); //["one", "two","three", "four"]
console.log(...a3); //one two three four

//clone array

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// console.log(arr1); //[1, 2, 3]
// console.log(arr2); //[1, 2, 3]

// arr1.push(4)

// console.log(arr1); //[1, 2, 3, 4]
// console.log(arr2); //[1, 2, 3, 4]

let arr1 = [1, 2, 3];
//using spread
let arr2 = [...arr1];

console.log(arr1); //[1, 2, 3]
console.log(arr2); //[1, 2, 3]

arr1.push(4);

console.log(arr1); //[1, 2, 3, 4]
console.log(arr2); //[1, 2, 3]

//spread  -object

const o1 = { a: 1, b: 2 };
const o2 = { c: 3 };

const o3 = { ...o1, ...o2 };
console.log(o3); //{a: 1, b: 2, c: 3}

//Rest parameter

//use spread operator as parameter

let x = function (...a) {
  console.log(a);
};

x(3); //[3]
x(4, 5, 6); //[4, 5, 6]
x(14, 15, 16, 17); //[14, 15, 16, 17]

// function add(a, b) { //parameter
//   return a + b;
// }
// add(5, 5);//argument

function sum(x, y, z) {
  console.log(x + y + z);
}

const num = [1, 3, 4, 5];

sum(...num);//8
