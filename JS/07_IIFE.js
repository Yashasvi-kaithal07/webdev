// Immediately Invoked Function Expressions (IIFE)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })  ();

//------------------------------------------------------------------------------------------
// var name = "Hitesh";
// function test() {
//     var age = 20;
// }
// console.log(name);


// // (function() {
// //     var name = "Hitesh";
// //     console.log(name);
// // })();
//---------------------------------------------------------------------------------------------------------
(function chai(){       //Named IIFE
    console.log(`DB Connected`);
    
})();

((name) => {            // Simple IIFE
    console.log(`DB Connected ${name}`);
    
}) ('yashi') //iske andarlikhna zaruri hai otherwise error aayega