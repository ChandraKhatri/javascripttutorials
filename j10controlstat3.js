
// high order array loop
// for of
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const num of arr) {
//     console.log(num);
// }

// const str = "Chandra";
// for (const element of str ){
//     console.log(element);
// }

//maps
// const map = new Map();
// map.set("name", "Chandra");
// map.set("age", 19);
// map.set("password", "1234");
// console.log(map);

// for (const [key , value] of map) {
    // console.log(key , ':' , value);
    // 
// }
// const myObj = { name: "Chandra", age: 19, password: "1234" };
// for (const [key, value] of myObj) {
//     console.log(key, ':', value);
    
// }   <---- we cannot iterate object---->
// const myObj = { name: "Chandra", age: 19, password: "1234" };
// for (const key in myObj) {
//     console.log(key)
// }
//
const map = new Map();
map.set("name", "Chandra");
map.set("age" ,19);
map.set("password", "1234");
for (const [key,value] of map) {
    console.log(key, ':', value);     
    }
//foreach
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((num) => {
    console.log(`value is ${num}`);
})
