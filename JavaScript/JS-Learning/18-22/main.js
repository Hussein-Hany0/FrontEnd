                    //If i have these 3 variables , explain what will happen each expression
/*
let a = 10;
let b = "20";
let c = 80;
//console.log(++a + +b++ + +c++ - +a++);

    [++a] pre-increment => 10 + 1 = 11
    [+b++] type casting then post increment => 20 + 1 = 21 in the next line , 20 in the calculatoin
    [+c++] positive c then post increment => 80 + 1 = 81 in the next line , 80 in the calculation
    [+a++] positive a then post increment => 11 + 1 = 12 in the next line , 11 in the calculation
    
    overall = 11 + 20 + 80 - 11 => 100


//console.log(++a + -b + +c++ - -a++ + +a);

    [++a] => pre increment => 10 + 1 = 11
    [-b] => type casting and sign change => -20
    [+c++] => positive c then post increment => 80 + 1 = 81 in the next line , 80 in the calculation
    [-a++] => negative a then post increment => -11 + 1 = -10 in the nextline , -11 in the calculatoin
    [+a] => positive a => |-11| + 1 = 11

    overall = 11 + -20 + 80 - -11 + 12
            = 11 -20 + 80 +11 +12
            = 11 + 60 + 11 + 12
            = 94

//console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

    [--c] = 80 - 1 = 79
    [+b] = 20
    [--a] = 10 - 1 = 9
    [+b++] = 20
    [+b] = 21
    *a = *9
    --a => 8
    +true = 1

    overall = 79 + 20 + 9 * 20 - 21 * 9 + 8 - 1 = 97

*/

                        //If you have these 4 valuse , how can you get 2000 and 173
/*
let d = "-100";
let e = "20";
let f = 30;
let g = true;

//console.log(+e * - +d); //2000
//console.log(); // 173
/*

                        //Replace the question mark with operators to get 0
/*
//console.log(10 ? 20 ? 15 ? 3 ? 190 ?  10 ? 400); // 0

//console.log(10 * 20 + 15 / 3 + 190 +  10 - 400); // 0
*/

                        //If you have one variable , how can you get 6 with six different expressions
/*
let num = 3;

console.log(num * --num); // 6

console.log(--num * num + num); // 6

console.log(+true + num + --num); // 6

console.log(++num * --num / --num); // 6

console.log(--num ** num + num); // 6

console.log(num + num); // 6

*/

                        //if you have one variable , how can you get 20 with 4 different expressions
/*
let num = "10";

console.log(num + num); // 20

console.log(); // 20

console.log("Write Your Code Here"); // 20

console.log("Write Your Code Here"); // 20
*/

                        //If you have this variable , how can you get 13 and 8

/*
let points = 10;

++points;
++points;
++points;

console.log(points); // 13

--points;
--points;
--points;
--points;
--points;

console.log(points); // 8;

*/