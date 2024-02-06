/*

function sayHello(theName , theGender) {
    
    if(theGender === "Male")
        console.log(`Hello Mr ${theName}`);

    else if(theGender === "Female")
        console.log(`Hello Miss ${theName}`);

    else 
    console.log(`Hello ${theName}`);
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"
*/

/*
function calculate(firstNum, secondNum, operation) {
    
    if(secondNum == undefined)
        console.log("Second Number Not Found");

    else if(operation === "add")
        console.log(firstNum + secondNum);

    else if (operation === "subtract")
        console.log(firstNum - secondNum);

    else if (operation === "multiply")
        console.log(firstNum * secondNum);

    else
        console.log(firstNum + secondNum);
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

*/

/*
function ageInTime(theAge) {
    
    if(theAge >= 10 && theAge <= 100){
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 365 * 4} Weeks`);
        console.log(`${theAge * 365} Days`);
        console.log(`${theAge * 365 * 24} Hours`);
        console.log(`${theAge * 365 * 24 * 60} Minutes`);
        console.log(`${theAge * 365 * 24 * 60 * 60} Seconds`);
    }
    else
        console.log("Age Out Of Range");
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
*/

/*
function checkStatus(a, b, c) {
    
    if(typeof a == "string"){
        if(typeof b == "number"){
            if(c == true)
                console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
            else
                console.log(`Hello ${a}, Your Age Is ${b}, You Are  Not Available For Hire`);
        }
        else {
            if(b == true)
                console.log(`Hello ${a}, Your Age Is ${c}, You Are Available For Hire`);
            else
                console.log(`Hello ${a}, Your Age Is ${c}, You Are  Not Available For Hire`);
        }
    }

    else if(typeof a == "number"){
        if(typeof b == "string"){
            if(c == true)
                console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
            else
                console.log(`Hello ${b}, Your Age Is ${a}, You Are  Not Available For Hire`);
        }
        else {
            if(b == true)
                console.log(`Hello ${c}, Your Age Is ${a}, You Are Available For Hire`);
            else
                console.log(`Hello ${c}, Your Age Is ${a}, You Are  Not Available For Hire`);
        }
    }

    else if(typeof a == "boolean"){
        if(typeof b == "number"){
            if(a == true)
                console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
            else
                console.log(`Hello ${c}, Your Age Is ${b}, You Are  Not Available For Hire`);
        }
        else {
            if(a == true)
                console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`);
            else
                console.log(`Hello ${b}, Your Age Is ${c}, You Are  Not Available For Hire`);
        }
    }
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

/*
function createSelectBox(startYear, endYear) {
    
    document.write(`<label for="cars">Choose a car:</label>`);
    
    document.write("<select id='cars' name='cars'>");

    for (let i = startYear ; i <= endYear ; i++){

        document.write(`<option value="${i}">${i}</option>`)
    }

    document.write("</select>");
}


createSelectBox(2000, 2021);
*/

/*
function multiply(...numbers) {

    let total = 1;

    for (let i = 0 ; i < numbers.length ; i++){
        if(typeof numbers[i] == "string")
            continue;
        else
            total *= Number.parseInt(numbers[i]);
    }

    console.log(total);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

multiply(100.5, 10, "B" , "C" , 10); // 1000
*/


