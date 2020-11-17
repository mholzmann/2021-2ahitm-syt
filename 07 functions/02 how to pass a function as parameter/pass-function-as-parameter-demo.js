function isEven(num) {
    return num % 2 === 0;
}

function isOdd (num) {
    return num % 2 !== 0;
}

function printNumbers(check) {   
    for (let i = 0; i < 10; i++) {       
        if (check(i)) {
            console.log(i);
        }             
    }
}

printNumbers(isEven); // output: 0, 2, 4, 8

console.log('------------------------');

printNumbers(isOdd); // output: 1, 3, 5, 7, 9