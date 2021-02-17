const fs = require('fs');

fs.readFile('./person.json', {encoding: 'utf8'}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const person = JSON.parse(data);
        console.log(person);
    }
});