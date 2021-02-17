const fs = require('fs');

fs.readFile('./part1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        let text = data;
        fs.readFile('./part2.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                text += data;

                fs.writeFile('./merged-with-callbacks.txt', text, (err) => {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log('Merged files successfully.');
                    }
                });        
            }
        });
    }
});

// Those nested callbacks are called "callback hell" ...