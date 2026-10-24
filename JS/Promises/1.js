console.log("hello Everyone");

// //Long Method

// const p1 = fetch("https://api.github.com/users");
// // console.log(p1); i//intially request was pending  //isse use nhi karna hai

// //fulfilled or reject

// // p1.then((response) => {
// //     console.log(response.json());//convert bytes into Js object(Async. task)
// // })

// const p2 = p1.then((response) =>{
//     return response.json();
// })
// console.log(p2);

// //read
// p2.then((response) => {
//     console.log(response);
    
// })

// //-----------------------------------------Better Way
fetch("https://api.github.com/users")

.then((response) => {
    // if(response.ok){
    //     throw new Error("Data is not present in server");
    // }

    return response.json();
})

.then((data) => {
    // console.log(data); //data access karne ke liye, usko dekhne ke liye
    const parent = document.getElementById('first');

    for (let i = 0; i < data.length; i++) {
    
    const image = document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.height = "100px";

    parent.append(image);
    }
})
// .catch((error) => {
//     const parent = document.getElementById('first');
//     parent.textContent = error.message;
// })

console.log("Bye! Everyone");

//----------------------------------------------------------------------------------------------------------------


// //convert to Json
// const j1 = {
//     name: "Rohit",
//     age: 39,
//     address: "Kanpur",
// }
// const jsonFormat = JSON.stringify(j1);
// console.log(jsonFormat);

//--------------------------------------------------------------------------------------------------

// //convert to JS- object
// const jsonFormat = `{
//     "name": "Rohit",
//     "age": 39,
//     "address": "Kanpur"
// }`;
// const jsObj = JSON.parse(jsonFormat)

// console.log(jsObj);


//--------------create promises--------------------------------------------------------------------------------
// const p1 = new Promise((resolve, reject)=>{
//     resolve("Helloee");
// })
// console.log(p1);

//------------Better way-----------
const p1 = new Promise((resolve, reject)=>{
    // reject("Hello");
    // resolve("Hello");
    resolve({
        name:"Rohit",
        age: 30,
    })
})
p1.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
    
});

