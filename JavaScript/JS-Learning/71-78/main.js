
/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix.map(function(ele) {
    return isNaN(ele) ? ele : "";

}).reduce(function(acc , cur){
    return acc + cur;
});

console.log(newMix);

// Elzero

*/

/*
let myString = "EElllzzzzzzzeroo";

let filteredString = myString.split("").filter(function(ele) {

})

// Elzero
*/

/*
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce(function(acc , cur){

    return typeof cur != "object" ? acc + cur : acc + cur.reduce(function(acc , cur){
        return acc + cur;
    })
})

console.log(newArray);

// Elzero
*/

/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newArray = numsAndStrings.filter(function(ele){
    return !isNaN(ele);
}).map(function(ele){
    return -ele;
});

console.log(newArray);
*/

/*
let nums = [2, 12, 11, 5, 10, 1, 99];

let newArray = nums.reduce(function(acc , cur){

    return cur % 2 == 0 ? acc * cur : acc + cur;

} , 1);

console.log(newArray);

// 500

*/