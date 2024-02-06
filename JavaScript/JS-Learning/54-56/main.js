/*

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"]; 
let index = 0;
let counter = 0;

let i = index;


while (i < friends.length) {
    if(typeof friends[i] === "number" || friends[i][0] === 'A'){

        i++;
        continue;
    }

    console.log(friends[i]);

    i++;
}

// Output
"1 => Sayed"
"2 => Mahmoud"

*/

/*
let myAdmins = ["Ahmed" , "Osama" , "Sayed" , "Stop" , "Samera"];

let myEmployees = ["Amged" , "Sameh" , "Ameer" , "Omar" , "Othman" , "Amany" , "Samia"];

let counter = 0;

for (let i = 0 ; myAdmins[i] != "Stop" ; i++)
    counter++;

document.write(`<div>we have ${counter} admins</div>`);

document.write(`<hr>`);

for (let i = 0 ; myAdmins[i] != "Stop" ; i++){

    document.write(`<div>`);
    document.write(`The Admin for Team ${i + 1} Is ${myAdmins[i]}`);
    document.write(`<h3>Team members:</h3>`);
    for (let j = 0 ; j < myEmployees.length ; j++){
        
        if(myAdmins[i][0] == myEmployees[j][0])
            document.write(`<p>${j + 1} ${myEmployees[j]}`);
    }
    document.write(`</div>`);
    document.write(`<hr>`);
}

*/