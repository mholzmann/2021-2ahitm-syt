const radius = 50;

let circumference = 2 * radius * Math.PI;
console.log(circumference);                             // output: 314.159265...

circumference = Math.round(circumference * 10) / 10;
console.log(circumference);                             // output: 314.2