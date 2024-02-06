
/*
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let regExp = /Os\d*O/g;

console.log(specialNames.match(regExp));

// Output
// ['Os10O', 'OsO', 'Os100O']

*/

/*
let phone = "+(995)-123 (4567)";

let regExp = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;

console.log(regExp.test(phone));
*/

/*
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.'*'/i; ' ' I added it manully to add a ml comment

// https means http or https

// : colon character

// \/\/ means //

// (?:[-\w]+\.)?
//
*/

/*
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{1,3}\W{1,3}\d{1,2}\W{1,3}\d{2,4}/g;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
*/

/*
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/(www.)?)?elzero.org(.+)?/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
*/

/*
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regExp = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g;

console.log(regExp.test(ip));
*/

