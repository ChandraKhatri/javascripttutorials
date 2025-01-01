//javascript execution context
// 1. Global Execution Context
// 2. Functional Execution Context
// 3. Eval Function Execution Context ----property of global EC-----
//memory creation phase
let val1=10;
let val2=20;
function addNum(num1,num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(30,40);
console.log(result1);
console.log(result2);
// Global EC ->this
///memory phase ->val1=undefined val2=undefined addNum=fn() result1=undefined result2=undefined
//execution phase ->val1=10 val2=20 addNum=fn() result1=30 result2=70
//functional EC ->this
//memory phase ->num1=undefined num2=undefined total=undefined
//execution phase ->num1=10 num2=20 total=30 total return to result1 after this  will delete the memory...
//functional EC ->this
//memory phase ->num1=undefined num2=undefined total=undefined
//execution phase ->num1=30 num2=40 total=70


//call stack
function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}   
function three(){
    console.log("three");
}
one();  
two();
three();
