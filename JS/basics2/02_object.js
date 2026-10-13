//Singleton
//----------Two ways to create object--------------------------------
// object.create
// const jsUser = {}
//---------------------------------------------------------------
//object literals
const mySymbol = Symbol("key1")// symbol ko as a keu use kaise kare neeche hai
const mySymbol2 = Symbol("key2")
const jsUser = {
    name: "hitesh",
    "full name": "hitesh kumar",//isko . se access nhi kar skate hai
    age: 19,
    mySymbol: "mykey1",
    [mySymbol2]: "mykey2", // square brackects use karne pe as a Symbol use hoga
    location: "Prayagraj",
    email: "yashasvi@google.com"
}
/*
console.log(jsUser["mySymbol"]);// abhi ye as a Symbol use nho ho raha!!!
console.log(typeof jsUser.mySymbol);// abhi ye as a Symbol use nho ho raha!!! as a string use ho raha

console.log(typeof jsUser[mySymbol2]);

console.log(jsUser.email);// not a proper way to access object
console.log(jsUser["email"]);
console.log(jsUser["full name"]);

jsUser.email = "hitesh@google.com"
Object.freeze(jsUser)
//console.log(jsUser["email"]);
jsUser.email = "shinchan@gmail.com"//email fixed hai isliye this will not show in output
console.log(jsUser);
*/

jsUser.greeting = function(){
    console.log("Hello User")
}

jsUser.greetingTwo = function(){
    // String Interpolation:
    console.log(`Hello User, ${this.name}`)//object ke andar name ko refernce karna. Object ke andar ki properties mil jayegi
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
