function printNumbers(check) {   
    for (let i = 0; i < 10; i++) {       
        if (check(i)) {
            console.log(i);
        }             
    }
}

printNumbers(function(num) {
    return num % 3 === 0;
});                                        
// output: 0, 3, 6, 9

console.log('------------------------');

printNumbers((num) => {return num < 4;});  
// output: 0, 1, 2, 3

console.log('------------------------');

printNumbers(num => num >= 7);        
// output: 7, 8, 9