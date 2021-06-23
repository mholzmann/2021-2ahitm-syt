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

    // Getter vor #age field
    get age() {
        return this.#age;
    }

    // Setter for #age field
    set age(value) {
        if (value >= 0) {
            this.#age = value;
        } else {
            console.error('Person.age must not be negative!');
        }
    }
}

const john = new Person('John', 'Smith', 34);
console.log(person); 

// #age can be accessed and modified via age getter/setter
console.log(`old age: ${person.age}`);
person.age++;
console.log(`new age: ${person.age}`);

console.log(`full-aged: ${person.isFullAged()}`);