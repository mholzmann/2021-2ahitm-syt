class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    isFullAged() {
        return this.age >= 18;
    }
}

const john = new Person('John', 'Smith', 34);
console.log(john);
console.log(`${john.getName()} is ${john.age} years old.`);
console.log(`full-aged: ${john.isFullAged()}`)
console.log();

const jane = new Person('Jane', 'Doe', 12);
console.log(jane);
console.log(`${jane.getName()} is ${jane.age} years old.`);
console.log(`full-aged: ${jane.isFullAged()}`)
