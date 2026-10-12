// let score = 33
// console.log(score);
let score = "33abc" //ab ye ek string hai
// console.log(typeof score);

let value = Number(score)
// console.log(value);
// console.log(score);
console.log(typeof value);

let a=true
console.log(a);

let b=1; // 1 ka mtlb true hota hai joki boolean me convert karne ki wajah se aaya hai
let booleanConversion = Boolean(b)
console.log(booleanConversion);

//---------------------Operations-----------------
let val  = 3
let negVal = -val
console.log(negVal);
console.log(3**3); //square

let str1 = "hello"
let str2 = "henry"
console.log(str1+str2);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 +2);

// Primitve- call by value. 
// 7 types hote hai : String, Number , Booleqan, null, undefined, symbol, bigINT

//Non - primitve- call by Refernece : Array, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);









