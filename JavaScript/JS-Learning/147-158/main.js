
/*
// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }

    run() {
        console.log(`Car is running now`);
    }

    stop() {
        console.log(`car is stopped`);
    }
}

let car1 = new Car('mg' , 2022 , 420000);
let car2 = new Car('mn' , 2019 , 300_000);
let car3 = new Car('ls' , 2002 , 200_000);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`)
car1.run();

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
*/

/*
class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

class Tablet extends Phone {
    constructor(name , serial , price , size) {
        super(name, serial, price);

        this.size = size || 'unknown';
    }

    fullDetails() {
        console.log(`${this.name} serial is ${this.serial} And Size Is ${this.size}`);
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
*/


/*
// Edit The Class
class User {

    #c;

    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }

    convertString() {

        let newCard = "";

        for (let i = 0; i < this.#c.length; i++){
            if (i % 4 != 3 || i == this.#c.length -1 )
            newCard += this.#c[i];
        else {
            newCard += `${this.#c[i]}-`;
            }
        }

        this.#c = newCard;
    }

    get showData() {

        this.#c = this.#c.toString();

        this.convertString();

        return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
*/

/*
String.prototype.addLove = function () {
    console.log(`I Love Elzero Web School`);
}


// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
*/

/*
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

Object.defineProperties(myObj, {
    username: {
        configurable: false,
        writable: false
    },
    id: {
        configurable: false,
        writable: false,
        enumerable: false
    },
    score: {
        configurable: false,
        writable: false
    },
    country: {
        configurable: false,
        writable: false,
        enumerable: false,
    }
})


myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
*/
