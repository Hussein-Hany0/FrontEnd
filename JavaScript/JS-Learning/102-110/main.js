
/*
let value = window.prompt("Print number from - to");

let valueArray = value.split('-');

if (parseInt(valueArray[0]) <= parseInt(valueArray[1])) 
    for (let i = parseInt(valueArray[0]); i <= parseInt(valueArray[1]); i++)
        console.log(i);

else
    for (let i = parseInt(valueArray[1]); i <= parseInt(valueArray[0]); i++)
        console.log(i)
*/

/*
setTimeout(() => {
    let parent = document.createElement("div");

    parent.style.padding = 20;

    parent.style.backgroundColor = "lightcoral";

    parent.style.margin = "auto";

    let heading = document.createElement("h3");

    heading.textContent = "Welcome";

    parent.append(heading);

    let para = document.createElement("p");
    
    para.textContent = "Welcome to elzero web school";
    
    parent.append(para);
    
    document.body.append(parent);

}, 5000);
*/

/*
window.onload = function () {

    let myDiv = document.createElement("div");
    
    myDiv.innerHTML = 10;
    
    document.body.appendChild(myDiv);

    let decrease = function () {
        myDiv.innerHTML -= 1;

        if (myDiv.innerHTML <= 0)
            clearInterval(interval);
    }
    
    let interval = setInterval(decrease, 1000);
}
*/

/*
window.onload = function () {

    let myDiv = document.createElement("div");
    
    myDiv.innerHTML = 3;
    
    document.body.appendChild(myDiv);

    let decrease = function () {
        myDiv.innerHTML -= 1;

        if (myDiv.innerHTML == 0)
            window.open("https://elzero.org.com", "_self");
    }
    
    let interval = setInterval(decrease, 1000);
}
*/

/*
window.onload = function () {

    let myDiv = document.createElement("div");
    
    myDiv.innerHTML = 7;
    
    document.body.appendChild(myDiv);

    let decrease = function () {
        myDiv.innerHTML -= 1;

        if (myDiv.innerHTML <= 0)
            clearInterval(interval);

        if (myDiv.innerHTML == 5)
            window.open("https://elzero.org/", "_blank" , "width=400, height=400,left=700,top=300");
    }
    
    let interval = setInterval(decrease, 1000);
}
*/

