// With promises you can avoid callback hell (see callback.js).
// The keywords 'async' and 'await' make the usage of promises more comfortable.

const fsPromises = require('fs').promises;

async function mergeFiles() {
    try {
        console.log('Reading part1.txt ...');
        let text = await fsPromises.readFile('./part1.txt', 'utf8');
        console.log('Read file successfully.');
        
        console.log('Reading part2.txt ...');
        text += await fsPromises.readFile('./part2.txt', 'utf8');
        console.log('Read file successfully.');        

        console.log('Writing file ...');
        await fsPromises.writeFile('./merged-with-promises.txt', text);
        console.log('Merged files successfully.');
    } catch (error) {
        console.log(error);
    }
}

mergeFiles();
console.log('Could do something else meanwhile ...');