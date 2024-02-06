
/*
let setOfNumbers = new Set().add(10);

setOfNumbers.add(20).add(setOfNumbers.size);

//sets doesn't have direct way to get a specific value by its index because you don't know the order of elements
//and the index also

console.log(setOfNumbers);
*/

/*
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

//let newArray = Array.from(new Set(myFriends)).sort();

let nextArray = [...new Set(myFriends)].sort();

console.log(nextArray);
*/

/*
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map(myInfo);

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
*/

/*
let theNumber = 100020003000;

let newArray = [...new Set(Array.from(theNumber.toString()))];

console.log(newArray);

123
*/

/*
let theName = "Elzero";

let first = theName.split('');

let second = [...theName];

let third = Array.from(theName);

console.log(fourth);

//['E', 'l', 'z', 'e', 'r', 'o']
*/

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(chars.sort());

// Needed Output
//['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']