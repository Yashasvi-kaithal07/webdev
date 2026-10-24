// //async function always return a promise

// async function greet() {
//     return"Rohit";  // function ke aage agr async hai toh return humesha promise hoga
// }

// const response = greet()
// // console.log(response);
// response.then((data) => console.log(data));//response ko Consume karne ka tareeka

//-----------------------2nd way----------------------------------------------------------------

// async function greet() {

//     return new Promise((resolve, reject) => {

//     // resolve("Rohit");
//     reject("Rohit");  // agar rejection ho toh error handling
// })

// }

// const response = greet()
// // console.log(response);
// response.then((data) => console.log(data))
// .catch((error) => {
// console.log("Error: ",error);

// })


//--------------------------complex way--------------------------

// fetch("https://randomuser.me/api/")
// .then((response) => response.json())
// then.((data) => console.log(data))

//-------------better easy way-----------------------------

// const response = await fetch("https://randomuser.me/api/");// jbtak ye revolve/execute na hojaye tab tak wait karo(AWAIT), agli line pe nhi jaana
// //program freeze ho jayega(Problem hai joki) . [Thats why we use Async Function]
// const data = await response.json();
// console.log(data);
// console.log('hello hello');// baad me print hoga due to freeze


//-------------------Solution to freeze------------------------------
async function github() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
}

github();
console.log("hello hello"); // ye pehele print hoga, kyuki freeze nhi hoga
