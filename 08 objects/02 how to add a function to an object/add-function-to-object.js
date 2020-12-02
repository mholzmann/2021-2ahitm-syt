// you can add a function when creating the object
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    getName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.getName());


// (like any other property) you can also add a function later
person.getReversedName = function() {
    return this.lastName + " " + this.firstName;
}

console.log(person.getReversedName());