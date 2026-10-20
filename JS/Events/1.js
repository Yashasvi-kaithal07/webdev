//-----------------------------------------Ye wala method bhi nhi use karte
// function handleClick(){
//     const element = document.getElementById('first');
//     element.textContent = "I want to marry You";
// }
//---------------------------Ye wala method bhi nhi use karte(neeche wala same function Uppar wale ko Override kardega)-------------------------------------------------------
// const element = document.getElementById('first');
// element.onclick = function handleClick() {
//     element.textContent = "Love Yourself";
// }
//------------------------------------Best Way----------------------------------------------------------------------------------------
// const element = document.getElementById('first');

// element.addEventListener('mouseenter', () => {
//     element.textContent = "Love Yourself";
//     element.style.backgroundColor = "brown";
// });

//-----------------------------------------------------------------------------------------------
// const child1 =  document.getElementById('child1')
// child1.addEventListener('mouseenter', () => {
//     child1.textContent = 'I have got clicked'
//     child1.style.backgroundColor = "white"
// })

//Better than above code but still not optimised--------------------------------------------------------------
// const parent = document.getElementById('parentDiv')
// // console.log(parent.children);

// for (const child of parent.children) {
//     console.log(child);
//     child.addEventListener('click', () =>{
//         child.textContent = 'I have got Clicked'
//     })
// }


//------------------------Optimised by Bubbling----------------------------------------------------------------
const grandparent = document.getElementById('grandparent')
grandparent.addEventListener('click', (e) => {  //(e) event holder
    // console.log(e.target);
    console.log("Grandparent is Clicked");
})
    
//by defualt it is false. True karne se order chaange ho jayega
const parent = document.getElementById('parent')
parent.addEventListener('click', () => {
    console.log("Parent is Clicked");
    
})
const child = document.getElementById('child')
child.addEventListener('click', () => {
    console.log("Child is Clicked");
    
})

