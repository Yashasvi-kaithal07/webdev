//Prototype and Classes

// const obj = {
//     name:"Rohit",
//     age: 30,
//     greet: function(){
//         console.log("Hello Everyone");
//     }
// }
// // console.log(obj.greet);
// // obj.greet()

// console.log(obj.hasOwnProperty("names"));// iss name ki exist hi nhi karti -> false
// console.log(obj.toString());

// //----------------------------------------------------------------------------------------------------------------------------------------------

// const obj1 = {
//     account : 30
// }
// // console.log(obj1.name);//undefined

// /*-----------------------------------------------------IMPORTANT----------------------------------------------------------*/
// obj1.__proto__ = obj;
// console.log(obj1.name);// ab name accessible hai


//----------------------------classes--------------------------------------------------------
//There is much manual work of repetition of creating Objects

// const obj = {
//     name :"ron",
//     age: 29,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// const obj2= {
//     name :"mohit",
//     age: 19,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// const obj3= {
//     name :"sohan",
//     age: 18,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

//------------Now, here comes Classes use-----------------------------------

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}


// const person1 = new Person("Rohit",20)
// const person2 = new Person("Mohit",22)

// console.log(person1);//iss me print karne se method sayHi print nhi huaa.

// console.log(person1.sayHi());
// console.log(person2.sayHi());  // undefines isliye aayega kyuki kuchh return nhi ho raha.



class Customer extends Person{
    constructor(name, age, account, balance){
        super(name, age);
        this.account = account;
        this.balance = balance;
    }

checkBalance(){
    return this.balance;
}
}
const c1 = new Customer ("Mohan", 20, 20001, 100);
console.log(c1);
