// you can create an empty object with new keyword
const o1 = new Object();       

// but prefer object literal syntax
const o2 = {};              

// an object consists of key-value pairs
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    female: false
}

console.log(person);

// you can access values with dot notation
person.lastName = 'Doe';
console.log(person.firstName + " " + person.lastName); // output: John Doe

// you can also access values with bracket notation
console.log(person['age']);

// you can add further key-value-pairs later
person.country = 'Austria'; 
person['city'] = 'Linz';
console.log(person);