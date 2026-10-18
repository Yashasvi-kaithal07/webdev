//------------------FILTER FUNCTION------------------------------------------------

// const myNums = [1, 2, 3, 4, 5, 6, 7]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);
//-------------------------------------------------------------------------------------
//Yaha pe humne Scope open kiya hai, toh agar return nhi kiya toh sirf Array block ouput me hoga
// const newNums = myNums.filter( (num) => {
//     num > 4
// } )
// console.log(newNums);
//-------------------------------------------------------------------------------------
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);
//-------------------------------------------------------------------------------------

//-------------------------------------------------MAP----------------------------------------------
// const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums2.map( (num) => num + 10)
// // console.log(newNums);

//------------------------------Chaining-------------------------------------------------------------
// const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums2
//     .map( (num) => num * 10) // pehel ye chalgea fir iski value 2nd me pass hogi
//     .map( (num) => num + 1)
//     .filter( (num) => num >= 50)
//     console.log(newNums);
//---------------------------------------REDUCE function------------------------------------------
const myNums = [1, 2, 3,]

// const store = myNums.reduce(function (acc, currval){
//     console.log(`accumulator: ${acc} and cuurval: ${currval}`);
    
//     return acc + currval
// }, 3)
// console.log(store);

// const store = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(store);



