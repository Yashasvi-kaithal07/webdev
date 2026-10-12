// Primitive me Stack memory use
// Non - primitive me Heap memory use

// let myYoutubename = "yashu"
// let anotherName = myYoutubename
// anotherName = "Yashasvi"

// console.log(myYoutubename);
// console.log(anotherName);

//---------------STRINGS----------------
// const name = "yashu"
// const repoCount = 50
// console.log(`Hello my name is ${name} nad nmy repo count is ${repoCount}`); 
// console.log(name.toUpperCase());

// const gameName = new String('christmas')
// console.log(gameName[0]);  //index access karke value fetch
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf("t"));

// const newString = gameName.substring(0,4)
// console.log(newString);

//-------------Number and Math---------------
// const score = 400
// const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString().length); // now, a string
// console.log(balance.toFixed(3));//jitne decimal point tak value chahiye

// const otherNumber = 23.34834
// console.log(otherNumber.toPrecision(4)); //round-off value deta hai.

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US')); // 'en-US' se US way me comma lagega

//--------------------MATHS-------------------------------

// console.log(Math.abs(-3));
// console.log(Math.round(6.6));
// console.log(Math.ceil(4.2));  //Number ko upar wali nearest integer value tak round kar dena.
// console.log(Math.min(4, 6, 7 ,9));
// console.log(Math.floor(456.5));

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);



