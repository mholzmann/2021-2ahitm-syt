const names = ['John', 'Jane', 'Joe', 'Jessica'];

// you can iterate over all values with for-loop
for (let i = 0; i < names.length; i++) {
    console.log('names[' + i + ']=' + names[i]);
}
// output: names[0]=John, names[1]=Jane, names[2]=Joe, names[3]=Jessica

console.log('-----------------------------');

// you can also iterate over all values with for-of-loop
for (const name of names) {
    console.log(name);
}
// output: John, Janes, Joe, Jessica

console.log('-----------------------------');

// for-in-loop iterates over all indizes
for (const index in names) {
    console.log(index);
}
// output: 0, 1, 2, 3