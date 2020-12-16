console.log('A');

// callback get's executed after main function finished
setTimeout(() => console.log('B'), 0);

console.log('C');

// output: A C B