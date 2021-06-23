const string = 'Lion: "Rooaaaaar!"';

let pattern = /o*/;
let result = pattern.test(string);          // tests whether string contains zero or more 'o'
console.log(`${pattern} => ${result}`);     // => true

pattern = /s+/;
result = pattern.test(string);              // tests whether string contains one or more 's' (e.g. 's', 'ss', 'sss', ...)
console.log(`${pattern} => ${result}`);     // => false

pattern = /o+c?a*/;
result = pattern.test(string);              // tests whether string contains one or more 'o' followed by zero or one 'c' followed by zero or more 'a'
console.log(`${pattern} => ${result}`);     // => true

pattern = /o{3}/;
result = pattern.test(string);              // tests whether string contains 'ooo'
console.log(`${pattern} => ${result}`);     // => false

pattern = /a{3}/;
result = pattern.test(string);              // tests whether string contains 'aaa'
console.log(`${pattern} => ${result}`);     // => true

pattern = /o{2,4}/;
result = pattern.test(string);              // tests whether string contains 'oo', 'ooo' or 'oooo'
console.log(`${pattern} => ${result}`);     // => true

pattern = /a{2,4}/;
result = pattern.test(string);              // tests whether string contains 'aa', 'aaa' or 'aaaa'
console.log(`${pattern} => ${result}`);     // => true

pattern = /^[A-Za-z:!"]+\s[A-Za-z:!"]+$/;   // \s is equal to a blank space
result = pattern.test(string);              // tests whether string contains two words
console.log(`${pattern} => ${result}`);     // => true

pattern = /^[A-Za-z:!"]+\s[A-Za-z:!"]+\s[A-Za-z:!"]+$/;
result = pattern.test(string);                  // tests whether string contains three words
console.log(`${pattern} => ${result}`);         // => false

pattern = /^([A-Za-z:!"]+\s){2}[A-Za-z:!"]+$/;  // equal to pattern above, but more flexible
result = pattern.test(string);                  // tests whether string contains three words
console.log(`${pattern} => ${result}`);         // => false