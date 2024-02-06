
addEventListener("click", function (event) {

    if (event.target.src === 'file:///D:/vs-html/simple1/Imgs/icon-plus.svg') {

        event.target.src = 'file:///D:/vs-html/simple1/Imgs/icon-minus.svg';

        let paragraph = event.target.parentNode.nextSibling.nextSibling;

        paragraph.style.display = "block"

        paragraph.style.opacity = 1;
    }
    
    else {
        event.target.src = 'file:///D:/vs-html/simple1/Imgs/icon-plus.svg';

        let paragraph = event.target.parentNode.nextSibling.nextSibling;

        paragraph.style.display = "none";
    }
});