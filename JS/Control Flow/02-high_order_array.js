// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world"
// for (const greet  of greetings) {
//     console.log(greet);
// }

//----------------------------------MAPS---------------------------------------------------
// const map = new Map()
//     map.set("IN", "INDIA")
//     map.set("US", "united states of america")
//     map.set("JPN", "Japan")
// // console.log(map);
//-----------------------------------------------------
// for (const key of map) {
//     console.log(key);
// }


// for (const [key,value] of map) {
//     console.log(key, ":" ,value);
// }
//---------------------------------------------------------------------
// const myObj = {          //Doesn't work (forof) loop here like thid way, objects ke liye (forin)
//     game1: "NFS",
//     game2: "PUBG"
// }
//     for (const [key,val] of myObj) {
//         console.log(key, ":", val);
//     }
//--------------------------------------------------------------------------------------------
// const myObj = {
//     js: "javaScrpit",
//     cpp: "c++",
//     py: "python",
//     rs: "rust"
// }
// for (const key in myObj) {
// // console.log(myObj[key]);
// console.log(`${key} => shortcut is for ${myObj[key]}`);

// }

//--------------------------------------------------------------------------------------------------------
// const programming = ["js", "cpp", "py", "rs"]
// for (const key in programming) {
// // console.log(key);       //forin se Array ki keys(index) print hoti hai
// console.log(programming[key]);
// }
//------------------------------------------------------------------------------------------------------------------
// const map = new Map()           //for ka use karke no output we get cause map is not iterable
//     map.set("IN", "INDIA")
//     map.set("US", "united states of america")
//     map.set("JPN", "Japan")

//     for (const key in map) {
//         console.log(key);
//     }
//---------------------------------------------------------------------------------------------
const programming = ["js", "cpp", "py", "rs"]

// programming.forEach( function (item) {
//     console.log(item);
// })

// programming.forEach ((item) =>{   //Arrow opeartor 
//     console.log(item);
// })

