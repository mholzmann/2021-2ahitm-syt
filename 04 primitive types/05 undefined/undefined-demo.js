let age;
console.log(`value before first assignment: ${age}`);         // output: undefined
console.log(`type before first assignment: ${typeof(age)}`);  // output: undefined

console.log('-------------------------------------');

age = 16;
console.log(`value after first assignment: ${age}`);          // output: 16
console.log(`type after first assignment: ${typeof(age)}`);   // output: number

console.log('-------------------------------------');

age = 'too old';
console.log(`value after second assignment: ${age}`);          // output: too old
console.log(`type after second assignment: ${typeof(age)}`);   // output: string