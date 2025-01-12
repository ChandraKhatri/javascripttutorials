// 
// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(2,3,4));

// function with arrays
let cart = [20, 30, 40];
const calculateCartPrice = (cart) => {
    let total = 0;
    cart.forEach(item => {
        total += item;
    });
    return total;
}
console.log(calculateCartPrice(cart));