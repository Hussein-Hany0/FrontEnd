
let myRequest = new XMLHttpRequest();

myRequest.open("get", "test.josn");

myRequest.send();

myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4 && myRequest.status === 200)
        console.log(myRequest.responseText);
}