const arguments = require('./arguments');

for (const arg of arguments) {
    console.log(`${arg} is a ${typeof arg}`);
}