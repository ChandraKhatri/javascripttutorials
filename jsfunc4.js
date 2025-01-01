const myDetails = {
    name: 'Chandra',
    age: 19,
    study: "B.Tech",
};
console.log(myDetails);

const chandra = function (theObjects) {
    theObjects.study = "BSC.Csit";
}
chandra(myDetails);
console.log((myDetails.study));
