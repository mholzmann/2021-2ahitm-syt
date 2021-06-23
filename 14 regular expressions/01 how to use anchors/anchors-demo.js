const string = 'The best way to validate a string is to use regular expressions!';

let pattern = new RegExp('best');
let result = pattern.test(string);      // tests whether string contains 'best'
console.log(`${pattern} => ${result}`); // => true

pattern = /^best/;
result = pattern.test(string);          // tests whether string starts with 'best'
console.log(`${pattern} => ${result}`); // => false

pattern = /^The best/;
result = pattern.test(string);          // tests whether string starts with 'The best'
console.log(`${pattern} => ${result}`); // => true

pattern = /ons!$/;
result = pattern.test(string);          // tests whether string ends with 'ons!'
console.log(`${pattern} => ${result}`); // => true