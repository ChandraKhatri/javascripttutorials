//start after long break

// control flow (if)
// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log("You are logged in");
// }
// if (2 == "2") {
//     console.log("This is true");
// }
// if (2 === "2"){
//     console.log("This is false");
// }
// const temperature = "20";
// if (temperature === 20) {
//     console.log("If stat run");
// }
// else if (temperature === "20") {
//     console.log("if else stat runs");
// }
// else {
//         return 0;
// }

//short hand notation
// const isUserLoggedIn = true;
//  if (isUserLoggedIn ) console.log("You are logged in");
// isUserLoggedIn ? console.log("You are logged in again") : console.log("You are not logged in again and again");

let userLoggedIn = true;
let debitCard = true;
let creditCard = false;

if (userLoggedIn && debitCard ) {
    console.log("You can make a transaction");
}
if (userLoggedIn || creditCard) {
    console.log("You can make a transaction");
}   
//tmele mlae jana dinu prxa
