import { printDetails4 as provideInfo, double, Msg } from "./functiondestructure.js"; //named import

// import printDetails4  from "./functiondestructure.js"; //default import
// import double from "./functiondestructure.js";

const student = {
  name: "Ajith",
  age: 20,
  batch: "B46WD",
  score: 90,
};

console.log(printDetails4(student));
console.log(double(10));
console.log(Msg);
