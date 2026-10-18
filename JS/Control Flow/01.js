//if statement

//FALSE VALUES- false, 0 , -0, bigINT, ""(empty string), null, undefuned, NaN
//TRUE VALUES- "0", "false", " ", [], {}, function() {}


// const score = 200

// if(score >100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
//     // console.log(`user power: ${power}`); //error aayeg akyuki const scope ke bahar accessible nhi hota

//------------------------------------------------------------------
// const balance = 1000
// if(balance > 500) console.log("test");  //Implicit tareeka 

//------------------------------------------------------------------
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log(`Object is empty`);
// }

//Nullish Coalesing Operator(??): null and undefined

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// val1 = undefined ?? 10

// console.log(val1);
//--------------------------------------------------------------------------------------------
//Ternary Operator- condition / true : false
const iceteaPrice = 100
iceteaPrice <= 80 ? console.log("less then 80"): console.log("more than 80)");


