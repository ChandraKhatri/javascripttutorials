// //                
// function addTwonum(a,b){     // a and b are parameters
// // returb a+b;
// console.log(a+b);
// }
// addTwonum(2,"3");   
// addTwonum(2,"a");   
// const result = addTwonum(2,null);  //these two value under brackets are arguments   
// console.log(result); // Output: undefined

// function addTwonum1(num1,num2){
//     let result = (num1+num2);
//     return result;
// }
// const result = addTwonum1(2,5);
// console.log("Resut :",result);


// function addTwonum1(num1,num2){
    
//     return num1+num2;
// }
// const result = addTwonum1(2,5);
// console.log("Resut :",result);

function loginUserMessage(username = "User"){
    // if(!username){
    //     console.log("Please provide username");
    //     return;
    // }
    return `${username} just logged in`;
}
const logedusername = loginUserMessage("yoseph");
console.log(logedusername);
const logedusername2 = loginUserMessage();
console.log(logedusername2);