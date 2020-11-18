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

printNumbers(function(num) {
    return num % 3 === 0;
});                                        
// output: 0, 3, 6, 9

console.log('------------------------');

printNumbers((num) => {
    return num < 4;
});  
// output: 0, 1, 2, 3

console.log('------------------------');

// if the lambda expression has expression has exactly one parameter you need no ()
// if the lambda has exactly one statement you need no {} and no return keyword
printNumbers(num => num >= 7);        
// output: 7, 8, 9