const args = process.argv.slice(2);
const typedArgs = args.map(convertDataType);

/**
 * Tries to convert the given string into a boolean or a number.
 * @param {string} text 
 */
function convertDataType(text) {
    // return a boolean
    const lowerCase = text.toLowerCase();
    if (lowerCase === 'true' || lowerCase === 'false') {
        return lowerCase === 'true';
    }
    // return a number
    const number = Number(text);
    if (!Number.isNaN(number)) {
        return number;
    }
    // return a string
    return text;
}

// a single object or function can be exported by assigning it to the module.exports property
module.exports = typedArgs;