let csv =
  "id,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26,";

let cell = "";
let table = [];
let row = [];

for (let i = 0; i < csv.length; i++) {
  let char = csv[i];
  //console.log(char)
  if (char !== "," && char !== "\n") {
    cell = cell + char;
  }
  if (char === ",") {
    row.push(cell);
    cell = "";
  }
  if (char === "\n" || i === csv.length - 1) {
    row.push(cell);
    cell = "";
    table.push(row);
    row = [];
  }
}
console.log(table);

for (let i = 0; i < table.length; i++) {
  console.log(table[i]);

  //nested array
  let nestedArray = table[i];
  for (let j = 0; j < nestedArray.length.length; J++) {
    console.log(nestedArray[j]);
  }
}
console.log(
  `.................................................................`
);
//converting the arrays to arrObj
const array1 = [
  ["ID", "42"],
  ["NAME", "Bruce"],
  ["OCCUPATION", "Knight"],
  ["Age", "41"]
];
const array2 = [
  ["ID", "57"],
  ["NAME", "Bob"],
  ["OCCUPATION", "Fry Cook"],
  ["Age", "19"]
];
const array3 = [
  ["ID", "63"],
  ["NAME", "Blaine"],
  ["OCCUPATION", "Quiz Master"],
  ["Age", "58"]
];
const array4 = [
  ["ID", "98"],
  ["NAME", "Bill"],
  ["OCCUPATION", "Doctors Assistant"],
  ["Age", "21"]
];
const obj1 = Object.fromEntries(array1);
const obj2 = Object.fromEntries(array2);
const obj3 = Object.fromEntries(array3);
const obj4 = Object.fromEntries(array4);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

console.log(
  `.................................................................`
);
// part 4, sorting and manipulating Data
//1. removing the last element from the sorted array1
let el1 = array1.pop();
console.log(array1);

let el2 = array2.pop();
console.log(array2);

let el3 = array3.pop();
console.log(array3);

let el4 = array4.pop();
console.log(array4);
//Insert the following object at index 1:
const array5 = [
  ["ID", "7"],
  ["NAME", "Bilbo"],
  ["OCCUPATION", "None"],
  ["Age", "111"]
];
const obj5 = Object.fromEntries(array5);
console.log(obj5);
//inserting the above object at index 1 of the arrays
  