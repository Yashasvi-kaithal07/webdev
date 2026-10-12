let myDate = new Date()
console.log("1:",myDate.toString());
console.log("2:",myDate.toDateString());
console.log("3:",myDate.toISOString());
console.log("4:",myDate.toJSON());
console.log(typeof myDate);

//  let myCreatedDate = new Date(2024, 0, 23) //month starts from 0 
let myCreatedDate = new Date("1-23-2024")//month starts from 1
// console.log("5:",myCreatedDate.toDateString());
// console.log("6",myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()//Current time ka timestamp deta hai in milisec.
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//Kisi specific date ka timestamp deta hai in milisec.

let newDate = new Date()
console.log(newDate.getMonth() + 1); // we did plus 1 cause month starts from 0 naturally in js.
console.log(newDate.getDate());
