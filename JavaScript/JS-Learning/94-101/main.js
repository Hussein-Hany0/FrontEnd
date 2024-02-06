
/*
let addClass = document.querySelector(".classes-to-add");

let removeClass = document.querySelector(".classes-to-remove");

let current = document.querySelector(".element");

addClass.addEventListener("blur", function (event) {
    let value = event.target.value.split(' ');

    for (let i = 0; i < value.length; i++)
        current.classList.add(`${value[i].toLowerCase()}`);

    addClass.value = "";
});

removeClass.addEventListener("blur", function (event) {
    let value = event.target.value.split(' ');

    for (let i = 0; i < value.length; i++)
        current.classList.remove(`${value[i].toLowerCase()}`);

    removeClass.value = "";
});

*/

/*
let myP = document.querySelector("p");

myP.remove();

let myDiv = document.querySelector(".our-element");

let divBefore = document.createElement("div");

divBefore.className = "start";

divBefore.title = "Start Element";

divBefore.setAttribute("data-value", "Start");

divBefore.textContent = "Start";

myDiv.before(divBefore);

let divAfter = document.createElement("div");

divAfter.className = "start";

divAfter.title = "Start Element";

divAfter.setAttribute("data-value", "Start");

divAfter.textContent = "End";

myDiv.after(divAfter);
*/

/*
let span = document.querySelector("span");

let linebreak1 = span.nextSibling;

let comment = linebreak1.nextSibling;

let textNode = comment.nextSibling;
*/

/*
let elements = document.querySelectorAll('div, span, p, article, section');

for (let i = 0; i < elements.length; i++) {

    elements[i].addEventListener("click", function (event) {
        console.log(elements[i].tagName.toLowerCase());
    }
    )
}
*/





