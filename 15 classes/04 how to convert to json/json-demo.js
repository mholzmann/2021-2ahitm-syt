class Person {
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

    // By default private fields are not part of JSON.
    // If they should be included you have to implement toJSON() method.
    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.#age
        }
    }

    static fromJSON(personJSON) {
        return new Person(personJSON.firstName, personJSON.lastName, personJSON.age);
    }
}

const john = new Person('John', 'Smith', 34);
console.log(john);

const johnString = JSON.stringify(john);
console.log(johnString);

const johnJSON = JSON.parse(johnString);
console.log(johnJSON);

const johnClone = Person.fromJSON(johnJSON);
console.log(johnClone);