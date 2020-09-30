// array containing the command line arguments
// - first element: path to Node.js executable
// - second element: path to JavaScript file
// - starting from third element: cli arguments
console.log(process.argv);

const args = process.argv.slice(2);

console.log(`Hello ${args[0]} ${args[1]}`);
// output: Hello John Smith (if app was started with 'node cli-arguments-demo John Smith')