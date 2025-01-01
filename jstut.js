//functions and its types

//1. Function Declaration
function greet() {
    console.log('Hello there');
}
greet() 

//2. Function Expression
const speak = function(a){
    console.log('Good day!'+ a);
};
speak(' Mario');

//3. Arrow Function
const calcArea = (radius) => {
    return 3.14 * radius**2;
};
console.log('Area is:', calcArea(5));

//4. Callback Function
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};  
myFunc(value => {
    console.log(value);
});
