function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 === 1;
}

/**
 * Prints numbers between 0 and 9, which pass the given test
 * @param {Function} test 
 */
function printNumbers(test) {   
    for (let i = 0; i < 10; i++) {       
        if (test(i)) {
            console.log(i);
        }             
    }
}

printNumbers(isEven); // output: 0, 2, 4, 8

console.log('------------------------');

printNumbers(isOdd); // output: 1, 3, 5, 7, 9