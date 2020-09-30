// you can create arrays with new keyword
const empty1 = new Array();       
const mixed = new Array('tennis', 'soccer', 'books', 7, false)
console.log(mixed); // output: ['tennis', 'soccer', 'books', 7, false]

console.log('------------------------------');

// but prefer array literal syntax
const empty2 = [];    
const hobbies = ['running', 'cooking', 'reading', 'travelling'];

// you can copy the whole array or just a part
const allHobbies = hobbies.slice();
const someHobbies = hobbies.slice(1, 3); 
console.log(allHobbies);  // output: ['running', 'cooking', 'reading', 'travelling']
console.log(someHobbies); // output: ['cooking', 'reading']

console.log('------------------------------');

// you can add elements
hobbies.push('sleeping');

// you can remove elements
const removedHobbies = hobbies.splice(1, 2);

console.log(hobbies);        // output: ['running', 'travelling', 'sleeping']
console.log(removedHobbies); // output: ['cooking', 'reading']