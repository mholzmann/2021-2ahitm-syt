console.log('Setting interval ...');

let i = 1;

// setInterval() returns a unique number which identifies the interval
const intervalId = setInterval(() => {
    console.log(i);
    i++;
    if (i > 5) {
        console.log('Clearing interval ...');
        clearInterval(intervalId);
        console.log('Program finished after 5 seconds');       
    }
}, 1000);

console.log('Set interval of 1 second');
