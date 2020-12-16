console.log('Setting timeouts ...');

// setTimeout() returns a unique number which identifies the timeout
const timeoutId = setTimeout(() => console.log('10 seconds passed'), 10000);

// callback above is never executed ...
// ... because callback below clears it before execution
setTimeout(() => {    
    console.log('Clearing timeout of 10 s ...');
    clearTimeout(timeoutId);
    console.log('Program finished after 3 s');
}, 3000);

console.log('Set timeouts of 3 s and 10 s');