const fs = require('fs');

const filename = 'hello.txt';
const data = 'Hello world!'

fs.writeFile(filename, data, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`${filename} has been written successfully.`);
    }
});