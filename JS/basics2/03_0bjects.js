// const tinderUser = new Object() //empty object(SINGLETON object)
const tinderUser = {} // empty object (NON-SINGLETONO)
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname: "choudary"
        }
    }
}
// console.log(regularUser.fullname);

//-----------------IMPORTANT------------------------------------------------------
const obj1 = {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// console.log(obj3);
//---------------------------------------------------------------------------------
// const obj3 = Object.assign(obj1, obj2) //this or neeche wala, zyada better hai
// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3);
//-------------------------------------------------------------------------------
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//-------------------------------------------------------------------------------
// const course ={
//     coursename: "this is english",
//     price: "1000",
//     courseInstructor: "hitesh"
// }
// // const {courseInstructor: } = course //DESTRUCTURING
// const {courseInstructor: instructor} = course//name update of courseInstructor
// console.log(instructor);

//-------------------------------------------------------------------------------