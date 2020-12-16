console.log('A');

// arrow function get's executed asynchronously after on second (= 1000 millisconds)
setTimeout(() => console.log('B'), 1000);

console.log('C');

// output: A C B
