/**
 * function declaration
 * @param {string} name 
 */
function hello(name) {
    console.log('Hello ' + name);
}

/**
 * function expression
 * @param {string} name 
 */
const hi = function(name) {
    console.log('Hi ' + name);
}

/**
 * arrow function expression (also called lambda expression)
 * @param {string} name 
 */
const hey = (name) => {
    console.log('Hey ' + name);
}

hello('John');
hi('Jane');
hey('Joe');

console.log('-----------------------');

/**
 * Greets Tom with the given greeting.
 * @param {string} greet 
 */
function talkWithTom(greet) {
    greet('Tom');
    console.log('How are you?');
}

talkWithTom(hi);