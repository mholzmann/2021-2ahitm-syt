// function declariaton
function hello(name) {
    console.log('Hello ' + name);
}

// function expression
const hi = function(name) {
    console.log('Hi ' + name);
}

// arrow function expression (lambda expression)
const hey = (name) => {console.log('Hey ' + name);}

hello('John');
hi('Jane');
hey('Joe');

console.log('-----------------------');

function talkWithTom(greet) {
    greet('Tom');
    console.log('How are you?');
}

talkWithTom(hi);