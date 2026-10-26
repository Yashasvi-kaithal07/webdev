//this, call, apply, bind
//this: class object method
//strict mode vs non-strict mode


// 'use strict' //ecma5- usinglatest java script
// var a= 10;
// var b = 20;// use strict ke wajah se hum data type declaration use karenge to declare variables

// console.log(a,b);


// function greet(name1, name2){// dono parameters ke name save nhi hone chahiye
//     console.log(name1, name2);
// }
// greet("Rohit", "Mohit");

//--------------------------------------------------------------------------------------------------------------------
// console.log(globalThis); // node me bhi chalega and window pe bhi


//-----------------------------------------------------------------------------------------------------------------------------
//global object ko point out karega

// const user = {
//     name:"Yash",
//     greet: function(){
//         function meet(){
//             console.log(this);
//         }
//         meet();
//     }
// }
// user.greet();
//--------------------------------------------------------------------------------------------
// 'use strict' // iske use se undefined aayega
// const user = {
//     name:"Yash",
//     greet: function(){
//         console.log(this);
        
//         function meet(){
//             console.log(this);
//         }
//         meet();//isne khud ko invoke kiya, isloye undefined aaya
//     }
// }
// user.greet();

//-------------------------------------------------------------------------------------------------
//Problem ye this- soved by callback

// const stopWatch = {
//     second: 0,
//     start: function(){

//         setInterval(function(){
//             console.log(this);
            
//             this.second++;
//             console.log(this.second);
            
//         },1000);
//     }
// }
// stopWatch.start();

//----------------------------------------------------------------------------------------------------
//callback apne se uppar wale function ke paas jake [star:function] ka this use karega.
//This called Lexical Envionemnt scope
// const stopWatch = {
//     second: 0,
//     start: function(){

//         setInterval(() => {
//             this.second++;
//             console.log(this.second);
            
//         }, 1000);
//     }
// }
// stopWatch.start();

//-----------------------------------------------------------------------------------------------------------
/* Arrow function ke paas khud ka this keyword nhi hota hai. Isliye uppar wale(OUTER SCOPE) kathis use karta hai.
Baaki function apna hi this use karta hai.

this keyword: Global scope in Node.js me empty object {} but windows me as  window Object

function ke andae this keyword, if someone invoke the method or function, this will point to that function

Non strict: Global object for  node and browser

strict mode: undefined

arrow function: it takes this from its lexical scope

jab bhi function call kar rahe hai toh dekho usko invoke kon kar raha hai, jo usko invoke kar rahai hai.
this usko point out karega.
jab usko koi invoke nhi kar raha, jab non- strict hai, toh har koi apne aap ko global maante hai.
Lekin jab user strict hoga, tab vo function jisko koi invoke nhi karaha vo khud ko hi call karega, aur tab this undefined ko call karega.

*/