function addTwoNumbers(n1,n2){
    let result = n1 + n2
    return result
}
const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

//----------------------------------------------------------------------------
function loginUserMessage(username){
if(username === undefined){
    console.log("Please enter a username");
    
    return
}
    return `$(username) just logged in`
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

//----------------------------------------------------------------------------
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 500));

//---------------------------------------------------------------------------------------

const user = {
    username: "hitesh",
    price: 199
}

function handleObj(anyobj) {
    console.log(`Username id ${anyobj.username} and price is ${anyobj.price}`);
}
// handleObj(user) // ya toh aise karlo access ya toh object banake
handleObj({
    username: "sam",
    price: 3094
})



const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue([200, 4, 8, 66]));
console.log(returnSecondValue(myNewArray));

