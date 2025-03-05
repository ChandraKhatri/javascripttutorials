// const array  = [1,2,3,4,5]

// for (const element of array) {
//     console.log(element)
    
// }
// const greeting = "hello";
// for (const greet of greeting){
//     console.log(greet);
// }

//Map
const map = new Map();
map.set("IN","India");
map.set("US","United States");
map.set("UK","United Kingdom");
console.log(map);
for (const [key,value] of map) {
    console.log(key,":-" ,value);
    
}
  