const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    female: false
};

// you can iterate over all keys with for-in-loop
console.log('--------------------')
console.log('keys of person:')
for (const key in person) {
    console.log('- ' + key);
}

// you can use for-in-loop and bracket notation to iterate over all values
console.log('--------------------')
console.log('values of person:')
for (const key in person) {
    console.log('- ' + person[key]);
}