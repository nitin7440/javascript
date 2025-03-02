// There are two category of data types. It is base on how the data is stored in memory and accessed.
// the one is Primitive and the second is Non-Primitive.

// Primitive 
// 7 types => String, Number, Boolean, null, undefined, Symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);


// Reference type (Non Primitive)
// Arrays, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "doga"]

let myObj = {
    name: "Nitin",
    Course: "MCA",
}

const myfunction = function(){
    console.log("Hello World");
}

// *****************************************************************************************************

// Stack (Primitive), Heap (Non-Primitive)  memory allocation


let myYoutubeName = "HiteshChoudharyDotCom"

let anotherName = myYoutubeName
anotherName = "chaiAurCode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "np@gmail.com",
    upi : "user@bpl"
}

let userTwo = userOne

userTwo.email = "np01@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

