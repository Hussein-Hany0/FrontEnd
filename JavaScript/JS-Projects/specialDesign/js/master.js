
let gear = document.querySelector(".layout i");

gear.addEventListener("click" , function () {
    let parent = gear.parentNode;
    
    if (parent.style.left < "0px") {
        parent.style.left = "0";
        gear.classList.add("fire");
    }
    
    else {
        parent.style.left = "-233px";
        gear.classList.remove("fire");
    }
});

let landing = document.querySelector(".landing");

landing.style.backgroundImage = 'url("imgs/01.jpg")';

let multipleBackgroundd = setInterval(changeBackground, 10000);

function changeBackground() {
    if (landing.style.backgroundImage[11] < 9 && landing.style.backgroundImage[10] == 0) { 
        let newUrl = landing.style.backgroundImage.substring(0, 11) + (+landing.style.backgroundImage.substring(11, 12) + 1) + landing.style.backgroundImage.substring(12);
        landing.style.backgroundImage = newUrl;
    }

    else if (landing.style.backgroundImage[11] == 9) {

        let newUrl = landing.style.backgroundImage.substring(0, 10) + "10" + landing.style.backgroundImage.substring(12);
        landing.style.backgroundImage = newUrl;
    }
        
    else {
        let newUrl = landing.style.backgroundImage.substring(0, 10) + "01" + landing.style.backgroundImage.substring(12);
        landing.style.backgroundImage = newUrl;
    }
}

let colors = document.querySelectorAll(".layout .colors ul li");

let randomBackground = document.querySelector(".background .buttons");

randomBackground.addEventListener("click", function () {
    if (event.target.classList.contains("yes")) {
        multipleBackgroundd = setInterval(changeBackground, 10000);
        event.target.classList.add("clicked");
        event.target.nextSibling.nextSibling.classList.remove("clicked");
    }
        
    else if (event.target.className == "no") {
        clearInterval(multipleBackgroundd);
        event.target.classList.add("clicked");
        event.target.parentNode.firstChild.nextSibling.classList.remove("clicked");
    }
});

let showBullets = document.querySelector(".show-bullets");
let bullets = document.querySelector(".bullets");

showBullets.addEventListener("click" ,function () {
    if (event.target.classList.contains("yes")) {
        bullets.style.display = "block";
        event.target.classList.add("clicked");
        event.target.nextSibling.nextSibling.classList.remove("clicked");
    }
        
    else if (event.target.className == "no") {
        bullets.style.display = "none";
        event.target.classList.add("clicked");
        event.target.parentNode.firstChild.nextSibling.classList.remove("clicked");
    }
});

addEventListener("click", function () {
    if (event.target.tagName == "LI") {
        for (let i = 0; i < colors.length; i++){
            colors[i].classList.remove("active");
        }

        this.event.target.classList.add("active");

        let background = window.getComputedStyle(event.target).backgroundColor;

        let rootStyles = getComputedStyle(document.documentElement);

        let mainColor = rootStyles.getPropertyValue('--mainColor');

        document.documentElement.style
            .setProperty('--mainColor', background);
        
    }
});


let bars = document.querySelector(".bars");

bars.onclick = function () {

    if (bars.parentNode.firstChild.nextSibling.nextSibling.nextSibling.style.display == "none")
        bars.parentNode.firstChild.nextSibling.nextSibling.nextSibling.style.display = "flex";
    else
        bars.parentNode.firstChild.nextSibling.nextSibling.nextSibling.style.display = "none";
}

let span = document.querySelectorAll(".box span");

window.onscroll = function () {
    if (window.pageYOffset >= 1024) {
        for (let i = 0; i < span.length; i++)
            span[i].style.transform = "translateX(0)";
    }
}