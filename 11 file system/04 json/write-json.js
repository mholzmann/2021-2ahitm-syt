const fsPromises = require('fs').promises;

const members = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        cities: ['Linz', 'London', 'New York']
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        cities: ['London']
    },
    {
        firstName: 'Richie',
        lastName: 'Rich',
        cities: []
    }
];

async function writePersons() {
    try {
        // \t is the escape sequence for a horicontal tabulator
        const jsonString = JSON.stringify(members, null, '\t');
        await fsPromises.writeFile('members.json', jsonString);
        console.log('written successfully');
    } catch (error) {
        console.log(error.message);
    }
}

writePersons();