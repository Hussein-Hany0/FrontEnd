let theTitle = "Elzero" , theDesc = "Elzro web school" , theDate = "25/10";

let markUp = `
    <div>
        <h3>${theTitle}</h3>
        <p>${theDesc}</p>
        <span>${theDate}</span>
    </div>
`;

const repeatedMarkUp = markUp.repeat(4);

document.write(repeatedMarkUp);

//----------------------------------------------------------------------------------------------

let numberOne = 10, numberTwo = 20;

console.log(numberOne + '' + numberTwo);

console.log(typeof (numberOne + '' + numberTwo));

console.log(`${numberOne}${numberTwo}`);


console.log(typeof (`${numberOne}${numberTwo}`));

console.log(numberTwo + "\n" + numberOne);

console.log(`${numberTwo}
${numberOne}`);

//-------------------------------------------------------------------------------------------------

let elzero = {name : "<p>object<p>"};

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//--------------------------------------------------------------------------------------------------

console.log("\`I'm In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n++ with ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`");

//--------------------------------------------------------------------------------------------------

let a = 21;
let b = 20;

console.log("_" + a + "_" + b + a + "_" + b + a + "_" + b + a + "_" + b + "_" ); // _21_2021_2021_2021_20_

