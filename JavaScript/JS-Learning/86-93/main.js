
/*
for (let i = 0 ; i < document.images.length ; i++){

    document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";

    document.images[i].alt = "Elzero Logo";
}
*/

/*
let currency = document.querySelector(".result");

let input = document.getElementsByTagName("input")[0];

input.addEventListener("input" , function(event){
    currency.innerHTML = `{${event.target.value || 0}} USD Dollar = {${(event.target.value * 15.6).toFixed(2)}} Egyptian Pound`;
})
*/

/*
let div1 = document.querySelector(".one");

let text = div1.textContent;

let div2 = document.querySelector(".two");

div1.setAttribute("title" , div2.getAttribute("title"));

div2.setAttribute("title" , div2.getAttribute("class"));

div1.textContent = div2.textContent;

div2.textContent = text;
*/

/*
for(let i = 0 ; i < document.images.length ; i++){

    if(document.images[i].alt)
        document.images[i].alt = "Old";
    else
        document.images[i].alt = "Elzer new";
}
*/

/*
let elementsValeu;
let textValue;

document.getElementsByClassName("input")[0].addEventListener("input" , function(event){
    elementsValeu = document.getElementsByClassName("input")[0].value;
});

document.getElementsByClassName("input")[1].addEventListener("input" , function(event){
    textValue = document.getElementsByClassName("input")[1].value;
});

let submitForm = document.getElementsByTagName("form")[0];

let flexDiv = document.getElementsByClassName("results")[0];

submitForm.addEventListener("submit", function(event) {
    event.preventDefault();

    for(let i = 0 ; i < elementsValeu ; i++){

        let childDiv = document.createElement("div");
        childDiv.innerText = `${textValue}`;
    
        flexDiv.appendChild(childDiv);
    }

    flexDiv.style.display = "flex";

    flexDiv.style.flexWrap = "wrap";

    flexDiv.style.boxSizing = "border-box";

    flexDiv.style.justifyContent = "space-between";

    Array.from(flexDiv.children).forEach(child => {
        child.style.Width = "33.33%";
        child.style.textAlign = "center";
        child.style.padding = "20px";
        child.style.backgroundColor = "#fc5a2a";
        child.style.marginTop = "5px";
        child.style.marginBottom = "5px";
    });
});
*/
