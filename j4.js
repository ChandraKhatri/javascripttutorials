//objects 
//singleton only instanes
//object literals
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe
console.log(person.fullName()); // Output: John Doe

const mySymbol = Symbol("key1");
person[mySymbol] = "value1";
console.log(person[mySymbol]); // Output: value1
person.mySymbol = "value1";
console.log(person.mySymbol); // Output: value1
person.greeting = function () {
    console.log("Hello, I am " + this.firstName);
}
console.log(person.greeting()); // Output: Hello, I am John