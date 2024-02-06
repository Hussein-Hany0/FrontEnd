
/*
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {

        let splitter = zName.split(' ');

        return `Hello ${splitter[0]} ${splitter[0][0].toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
        return `Your Age Is ${Number.parseInt(zAge)}`;
    }

    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry.substring(0, 2).toUpperCase()}`;
    }

    function fullDetails() {

        return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }

    return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY

*/

/*
// function itsMe() {
//     return `Iam A Normal Function`;
// }

let itsMe = _ => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol , web , tld) => `${protocol}://www.${web}.${tld}`;

  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

*/

/*
function checker(zName) {

    return function (status) {

        return function (salary) {

            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}

let checker = zName => status => salary => 
    status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

/*
function specialMix(...data) {
    
    let result = 0;

    for (let i = 0 ; i < data.length ; i++){
        
        if (typeof data[i] == "number")
            result += data[i];

        else if(typeof data[i] == "string"){
            if(Number.parseInt(data[i]) != NaN)
                result += parseInt(data[i]);
        }
    }

    if(result != 0)
        return result

    else
        return `All is Strings`;
}
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

*/