const array = [7, 44, -3, 0, 66, -6, 11];


const positive = array.filter(element => element > 0);
console.log(positive);
// output: [ 7, 44, 66, 11 ]


console.log('------------------------');


const even = array.filter(element => element % 2 === 0);
console.log(even);
// output: [ 44, 0, 66, -6 ]


console.log('------------------------');


const elementsWithOddIndex = array.filter((element, index) => index % 2 === 1);
console.log(elementsWithOddIndex);
// output: [ 44, 0, -6]


console.log('------------------------');


const firstNegative = array.find(element => element < 0);
console.log(firstNegative);
// output: -3