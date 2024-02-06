/*
let a = 1_00;
let b = 2_00.5;
let c = 1e2;        100
let d = 2.4;

//Find the smallest number and return it as integer

console.log(Math.trunc(Math.min(a , b , c , d)));

//Using a and d variable => return 1e4 value

console.log(Math.pow(a , Math.floor(d)));

//Get integer 2 from variable d using 4 different methods

console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));

//Using b and d variables to get 66.67 and 67 values

// b = 200.5
// d = 2.5

console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));

console.log(Math.ceil(Math.trunc(b) / Math.ceil(d)));

*/

/*
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1000 * 100); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(10e4); // 100000
console.log(1e5); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
*/

/*
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
*/

/*
console.log(Number.MAX_SAFE_INTEGER); //16
*/

/*
let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(Number(Number.parseFloat(myVar).toFixed(2))); // 100.57
*/

/*
let num = 10;

console.log(+Number.isInteger(num)); // 2
*/

/*
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(); // 10
*/

/*
console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
*/