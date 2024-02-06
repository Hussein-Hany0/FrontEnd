/*
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start ; i <= end ; i+= 10){
    if(i === 40)
        continue;

    console.log(i);
}

// Output
10
20
30
50
60
70
80
90
100
*/

/*
let start = 10;
let end = 0;
let stop = 3;

for (let i = start ; i >= stop ; i--){
    if(i < 10)
        console.log(`${end}${i}`);
    else
        console.log(i);
}

// Output
10
09
08
07
06
05
04
03
*/

/*
let start = 1;
let end = 6;
let breaker = 2;

for (let i = start ; i <= end ; i++){
    console.log(i);

    for (let j = breaker ; j <= breaker * 2 ; j+= 2)
        console.log(`--${j}`);
}

// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

/*
let index = 10;
let jump = 2;

for (;;) {

    console.log(index);

    index -= 2;

    if(index < 4)
        break;
}

// Output
10
8
6
4
*/

/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (;friends.length != 0;){
    
    let temp = friends.shift();

    if(temp[0] === letter.toUpperCase())
        continue;
    else
        console.log(temp);
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

/*
let start = 0;
let swappedName = "elZerO";

for (let i = start ; i < swappedName.length ; i++){

    if(swappedName[i] === swappedName[i].toLowerCase())
        swappedName[i] = swappedName[i].toUpperCase();
    
}

console.log(swappedName);

// Output
"ELzERo"
*/

/*
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = ++start ; i < mix.length ; i ++){

    if(typeof mix[i] == "string")
        continue;

    console.log(mix[i]);
}

// Output
2
3
4
*/

