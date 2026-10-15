let a = 300      //global toh always accessible hai
var g = 20;      //global toh always accessible hai
const f = 99;   //global toh always accessible hai

if(true){
let a = 10
const b = 20
var c = 30           // Block ke andar var accessible hai
}
// console.log(a);
// console.log(b);   //Const block ke andar accessible NHI hai
// console.log(c);
//---------------------------------------------------------------------

function greet(){
    let h = 30;    // function ke andar let accessible NHI hai
    const d = 30;  // function ke andar var accessible NHI hai
    const e = 90;  // functon ke andar const accessible NHI hai
}
// console.log(d);
// console.log(e);

// console.log(g);
// console.log(f);


//-------------------------------------CLOSER-------------------------------------
function createCounter(){

    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment; // function ka reference return hua hai,  call nhi hua  hai
}
// console.log(count); //error dega

const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
//-----------------------------------------------------------------------------------------------


