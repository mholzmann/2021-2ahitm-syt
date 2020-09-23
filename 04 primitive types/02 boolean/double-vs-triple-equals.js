// double equals is true if values match
console.log(123 == '123');  // output: true

// triple equals is true if datatypes and values match
console.log(123 === '123'); // output: false

console.log('-------------------------------------');

// there are also != and !==
console.log(123 != 123);        // output: false
console.log(123 != '123');      // output: false (different datatype ignored)
console.log(123 != '1234');     // output: true
console.log(123 != 123);        // output: false
console.log(123 !== '123');     // output: true (because of different datatype)
console.log(123 !== '1234');    // output: true

// in most cases:
//   use === instead of ==
//   use !== instead of !=