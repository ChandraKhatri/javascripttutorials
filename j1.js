// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Adding a new property
person.gender = "male";
console.log(person.gender); // Output: male

// Deleting a property
// delete person.age;
console.log(person.age); // Output: undefined

// Using methods
console.log(person.fullName()); // Output: John Doe

// Looping through object properties
// for (let key in person) {
// console.log(key + ": " + person[key]);
