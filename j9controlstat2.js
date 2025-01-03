// truthy and falshy value
// falsy value: 0, "", undefined, null, NaN, false
// truthy value: all other values also array with no element i.e null element
 
//Nullish coalescing operator
let var1 ;
// val1 = 5 ?? 10;// 5
val1 = undefined ?? 10
console.log(val1);

//ternary 
const teaPrice = 500;
teaPrice > 500 ? console.log("I will buy") : console.log("I will not buy");
let array1 = [];
if (array1.length === 0) {
    console.log("Array is empty");
}
let obj1 = {};
if ( Object.keys(obj1).length === 0) {
    console.log("key is not present");
}
