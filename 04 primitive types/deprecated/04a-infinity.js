let quotient = 1 / 0;                 
console.log("type of 1/0 is " + typeof(quotient));   // output: Number
console.log("value of 1/0 is " + quotient);          // output: Infinity

quotient = -1 / 0;                       
console.log("type of -1/0 is " + typeof(quotient));   // output: Number
console.log("value of -1/0 is " + quotient);          // output: -Infinity

if (quotient !== Infinity && quotient !== -Infinity) {
    console.log("quotient is finite");
} else {
    console.log("quotient is infinite");
}
// output: "quotient is infinite"

if (isFinite(quotient)) {
    console.log("quotient is finite");
} else {
    console.log("quotient is infinite");
}
// output: "Quotient is infinite"