class Person {
    citizenship = 'US'   // public field
    #age = 0             // private field

    constructor(firstName, lastName, age) {
        this.firstName = firstName;             // public field
        this.lastName = lastName;               // public field
        this.#age = age;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    isFullAged() {
        return this.#age >= 18;
    }
}

const john = new Person('John', 'Smith', 34);
console.log(person);
// output: Person { citizenship: 'US', firstName: 'John', lastName: 'Smith' }
// => #age is not accessible from outside

console.log(`full-aged: ${person.isFullAged()}`)