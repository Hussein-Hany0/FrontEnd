
/*
let myNumbers = [1, 2, 3, 4, 5];

let [a, , , , e] = myNumbers;

console.log(a * e); // 5
*/

/*
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let [a , b , c , [d , e , [f , g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
*/

/*
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

//merge two arrays
let mixedArray = arr3.concat(arr1);

//distructring mixedArray
let [, a, b, c] = mixedArray;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
*/

/*
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

({ age: a, working: w, country: c, hobbies: [h1, , h3] } = member);

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
*/

/*
const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
    },
    Origin: "30 USD",
    },
};

//({ title: t, developer: d, releases: { "Oath In Felghana": { o: [u, j] }, "Ark Of Napishtim": { a: { US: u_price, JAP: j_price } }, Origin: or } } = game);

({ title: t, developer: d, releases: { "Oath In Felghana": o, "Ark Of Napishtim" : a , Origin : or} } = game);

let [u, j] = o;

let {US : u_price, JAP : j_price } = a;


console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

*/

/*
let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen == 1) {
    [{ title, age, available, skills: [, css] }] = myFriends;

    console.log(title)
    console.log(age);
    if (available == true)
        console.log("available");
    else
        console.log("not available");

    console.log(css);
}

if (chosen == 2) {
    [, { title, age, available, skills: [, django] }] = myFriends;

    console.log(title)
    console.log(age);
    if (available == true)
        console.log("available");
    else
        console.log("not available");

    console.log(django);
}

if (chosen == 3) {
    [, , { title, age, available, skills: [, laravel] }] = myFriends;

    console.log(title)
    console.log(age);
    if (available == true)
        console.log("available");
    else
        console.log("not available");

    console.log(laravel);
}

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
*/

