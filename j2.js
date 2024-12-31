// //object part 2
// const tinder=new Object();
// tinder.name="Tinder";
// tinder.url="www.tinder.com";
// tinder.rating=4.5;
// tinder.isFree=true;
// tinder.download=function(){
//     console.log("Download " + this.name + " from " + this.url);
// }
// console.log(tinder.download()); // Output: Download Tinder from www.tinder.com

// console.log(tinder); 

// //object part 3
// //objects into objects
// const person = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New York"
//     }
// };
// console.log(person.address.street); 

// //combining objects
const person1 = {
    name: "John",
    age: 30
};
const person2 = {
    name2: "Jane",
    age2: 25
};
// const person3 = {
//     ...person1,
//     ...person2,
//     country: "USA"
// };
// const person3 = Object.assign({},person1, person2);

// console.log(person3);
// console.log(person1);

const person3 = { ...person1, ...person2 };
console.log(person3);
console.log(Object.keys(person3));