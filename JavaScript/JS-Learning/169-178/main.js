
let myRequest = new XMLHttpRequest();

myRequest.open("GET", "test.json");

myRequest.send();

let mainData;

let updatedData;

myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4 && myRequest.status === 200) {
        
        console.log(myRequest.responseText);

        mainData = JSON.parse(myRequest.responseText);

        console.log(mainData);
        
        updatedData = JSON.stringify(mainData);

        console.log(updatedData);

        document.write(`<div id="data">`);

        debugger;
        for (let i = 0; i < mainData.length; i++){
            
            document.write(`
                <div>
                    <h2>Title ${mainData[i].id}</h2>
                    <p>Article Number 1 ${mainData[i].content}</p>
                    <p>Author: ${mainData[i].author}</p>
                    <p>Category: ${mainData[i].type}</p>
                </div>
                `);
            }
        document.write(`</div>`);
        }
}

