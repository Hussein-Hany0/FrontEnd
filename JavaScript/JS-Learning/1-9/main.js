document.write("<h1 id='heading'>Elzero</h2>");

// var myHeading = document.getElementById("heading");
myHeading = document.getElementById("heading");

myHeading.style.color = "blue";
//heading.style.color = "blue";
myHeading.style.fontSize = "80px";
myHeading.style.fontWeight = "bold";
myHeading.style.textAlign = "center";
myHeading.style.fontFamily = "Arial";

// -----------------------------------------------------------------------------------------------------------


console.log("%cElzero %cweb %cschool", "color:red; font-size: 40px" , "\
            color: green; font-size: 40px ;font-weight: bold" , "\
            color:white; font-size:40px; background-color: blue");

//--------------------------------------------------------------------------------------------------------------

console.group("group1");
console.log("message1");
console.log("message2");

console.group("group2");
console.log("message1");
console.log("message2");

console.group("group3");
console.log("message1");
console.log("message2");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("group4");
console.log("message1");
console.log("message2");

console.groupEnd();

//------------------------------------------------------------------------------------------------------------------

console.log(["Elzero", "ahmed" , "sameh" , "gamal", "aya"]);


//------------------------------------------------------------------------------------------------------------------

/*

console.log("Iam In Console");

document.write("Iam In Page");

*/

console.log("Iam In Console");

document.write("Iam In Page");