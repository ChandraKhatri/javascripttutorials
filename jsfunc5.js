
// // 
// let name = 'Chandra';
// name = 'Chandra Khatri';
// let age = 19;
// console.log(name);
// let fname = name;
// console.log(fname);


// function calcCartTypes(val1,val2,...valn){
//     return valn;
// }
// console.log(calcCartTypes(2,3,4,5));


// const userDetail = {
//       username: 'Chandra',
//         age: 19,
//         password: "1234"
// };
// function user(anyObject){
//     console.log(`username is ${anyObject.username} and password is ${anyObject.password}`);
// }
// // user(userDetail);
// const userDetail = ["chandra",19,"1234"];

// function user(anyObject){
//     let user1 = `username is ${anyObject[0]} and password is ${anyObject[2]}`;
//     return user1;
// }
// console.log(user(userDetail));

//scope level and mini hoisting

let age = 19;
const age2 = 20;
var age3 = 21;
{
    var age3 = 25;
    let age = 30;//this value doesn't change the value of age outside the block
}
age = 40; //this value changes the value of age outside the block;
// age2 = 50; //this value doesn't change the value of age2 outside the block;
console.log(age);
console.log(age2);
console.log(age3);

// the value of var can be changed at any point so we don't use var
// the value of let can be changed but it can't be redeclared


// commit changed