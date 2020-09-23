const firstName = "Jane";   // you can use " " for string literals
const lastName = 'Doe';     // you can also use ' ' for string literals
const age = 20;

// you can concatenate strings with + 
const message = firstName + " " + lastName + " is " + age + " years old." 
console.log(message);

// you can use template strings instead of string concatenation
const sameMessage = `${firstName} ${lastName} is ${age} years old.`
console.log(sameMessage);