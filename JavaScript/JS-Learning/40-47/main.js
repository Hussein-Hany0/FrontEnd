/*
let zero = 0;

let counter = 3;

let my = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];

my = my.slice(zero , ++counter).reverse();

console.log(my);

console.log(my.slice(++zero , --counter));

my.splice(0 , 0 , "Elzero");

console.log(my[0]);

let chars = my[0].slice(4,6);

console.log(chars);
*/

/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
//console.log(myFriends.slice(--length - num , length)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(-length , --length)); // ["Ahmed", "Elham", "Osama"];
*/

/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
*/

/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
*/

/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(2,6).toUpperCase()); // ZERO
*/

/*
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if(haystack.includes(needle))
    console.log("Found");

if(haystack[1] == needle)
    console.log("Found");

if(haystack.sort().shift() == needle)
    console.log("Found");

// Write 3 Solutions
*/

/*
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr2[2].toLowerCase();
allArrs += arr1[2].toLowerCase();
allArrs += arr2[3].toLowerCase();

console.log(allArrs); // fxy
*/