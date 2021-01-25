const fs = require('fs');

const filename = "hello.txt";

fs.readFile(filename, 'utf8', (err, data) => {
    // error === undefined => everthing ok
    // the boolean value of undefined is false
    if (err) {
        console.log(err.message);
    } else {
        console.log(`content of ${filename}: ${data}`);
    }
});