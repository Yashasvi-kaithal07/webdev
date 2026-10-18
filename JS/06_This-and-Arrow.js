const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);// pure scope ka context
        
    }
}
// user.welcomeMessage() //calling function
// user.username = "sam"
// user.welcomeMessage()
//------------------------------------------------------------------------------------------------------------------------
// console.log(this);
//--------------------------------------------------------------------------------------------------------

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//     console.log(this);
// }
// chai()
//-----------------------------------------------------------------------------------------------------------------
// const chai = () => {  //Arrow Function
//     let username = "jiyesh"
//     // console.log(this.username);
//     console.log(this);
// }
// chai()
//------------------------------------------------------------------------------------------------
// const addTwo = (n1, n2) => {    //Explicit way me return ka use hota hai
//     return n1 + n2
// }
// console.log(addTwo(3,4));
//------------------------------------------------------------------------------
// const addTwo = (n1, n2) => n1 + n2   //IMPLICIT RETURN 1ST WAY
// console.log(addTwo(3,4)
//---------------------------------------------------------------------------------------------------------
// const addTwo = (n1, n2) => (n1 + n2)   //IMPLICIT RETURN 2nd way
// console.log(addTwo(3,4));
