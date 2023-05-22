const age = 20;
const batch = "B46WD";
const mark = 90;

const student = {
  name: "Ajith",
  age,
  batch,
  score: mark,
};

console.log(student); //{name: 'Ajith', age: 20, batch: 'B46WD', score: 90}

//Ajith has got 90 and he belongs to B46WD

function printDetails(student) {
  return (
    student.name +
    " has got " +
    student.score +
    " and he belongs to " +
    student.batch
  );
}

console.log(printDetails(student));

function printDetails1(student) {
  const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}

console.log(printDetails1(student));

function printDetails2({ name, score, batch }) {
  //const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}

console.log(printDetails2(student));

//ES6

//Template Literals = `` + ${} - interpolation => substitute the name,score, batch

function printDetails3({ name, score, batch }) {
  return `${name} has got ${score} and he belongs to ${batch}`;
}

console.log(printDetails3(student));

//Arrow function + Template Literals  + Destructuring

//named export
const printDetails4 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

console.log(printDetails4(student));

const double = (n) => n * 2;

const Msg = "This is awesome! 🥳🥳";

//export default printDetails4; //default export
// export default double;

export { printDetails4, double, Msg };

//import & export
// 1. named import & export  = prefer
// 2. default import & export
