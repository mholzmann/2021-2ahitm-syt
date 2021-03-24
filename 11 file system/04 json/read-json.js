const fsPromises = require('fs').promises;

async function readPerson() {
    try {
        const jsonString = await fsPromises.readFile('person.json', 'utf8');
        const person = JSON.parse(jsonString);
        console.log(person);
    } catch (error) {
        console.error(person);
    }
}

readPerson();