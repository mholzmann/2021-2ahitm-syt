console.log('A');

// arrow function executed after 5 s
setTimeout(() => console.log('B'), 5000);

// arrow function executed after 0,75 s
setTimeout(() => console.log('C'), 750);

// arrow function executed after 3 s
setTimeout(() => console.log('D'), 3000);

console.log('E');

// output: A E C D B
