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
//part 3
//converting the arrays to arrObj

const arrayObj = [
  {
    ID: 42,
    NAME: "Bruce",
    OCCUPATION: "Knight",
    Age: 41,
  },
  {
    ID: 57,
    NAME: "Bob",
    OCCUPATION: "Fry Cook",
    Age: 19,
  },
  {
    ID: 63,
    NAME: "Blaine",
    OCCUPATION: "Quiz Master",
    Age: 58,
  },
  {
    ID: 98,
    NAME: "Bill",
    OCCUPATION: "Doctors Assistant",
    Age: 21,
  },
];

console.log(
  `.................................................................`
);
console.log(arrayObj);
// part 4, sorting and manipulating Data
//1. removing the last element from the sorted arrayObj
let removeLast = arrayObj.pop();
console.log(arrayObj);

console.log(
  `.................................................................`
);
//Insert the following object at index 1:
const arrayObj5 = {
  ID: 48,
  NAME: "Barry",
  OCCUPATION: "Runner",
  Age: 25,
};

arrayObj.splice(1, 0, arrayObj5);
console.log(arrayObj);

console.log(
  `.................................................................`
);
//Add the following object to the end of the array:

const arrayObj6 = { ID: 7, NAME: "Bilbo", OCCUPATION: "None", Age: 111 };
arrayObj.push(arrayObj6);
console.log(arrayObj);

console.log(
  `.................................................................`
);
//now using the values of each object within the array and the array length property to calculate the avr age of the group
// so avr age of group

// to get the age of individual objects

for (let m = 0; m < arrayObj.length; m++) {
  //for(n=0; n <= m; n++){
  let arrNum = arrayObj[m].Age;
        
 

     
   
         let newVal = [];
        let newValHold= newVal.push(arrNum);
         
        function total(){
          let total = 0;
          for (let i =0; i<newVal.length; i++){
             total += newVal[i]
          }
          return total;
        }
        console.log(total());
      }