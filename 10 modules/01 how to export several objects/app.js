// import of module circle.js
const circle = require('./circle');

// object circle contains all exported functions
console.log("circle with radius of 4 cm:");
console.log(`- circumference = ${circle.circumference(4)} cm`);
console.log(`- area = ${circle.area(4)} cm²`);