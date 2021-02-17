// JSON = Java Script Object Notation

const fs = require('fs');

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 37,
    hasDrivingLicense: true
};

// \t is the escape sequence for a horicontal tabulator
const jsonString = JSON.stringify(person, null, '\t');

fs.writeFile('./person.json', jsonString, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('file has been written successfully');
    }
});