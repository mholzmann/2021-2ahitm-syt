require('fs');
const args = process.argv.slice(2);
const inputNumber = Number.parseInt(args[0]);

if (Number.isNaN(inputNumber)) {
    console.log(`error: ${args[0]} is no number`);
    return;
}

if (inputNumber < 0 ) {
    console.log(`error: ${inputNumber} < 0`);
    return;
}

console.log(factorial(inputNumber));


function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}