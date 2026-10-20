//create Element
const newElement = document.createElement('h2');
newElement.textContent = "Strike is coming";
newElement.id = "second";
console.log(newElement);

//select element
const element = document.getElementById('first');
element.after(newElement); //h1 element ke baad aajyega using .after

//----------------------------------------------------------------------------------------------------------------------------------------------
const newElement2 = document.createElement('h3');
newElement2.textContent = "Diwali is Coming";
newElement2.id = "third";
// newElement2.className = "diwali"// this is not the best pracrtise for assinging class kyuki ovrride ho jata hai last wala class
newElement2.classList.add('diwali');
newElement2.classList.add('holi');
// newElement2.classList.remove('holi');
newElement2.style.backgroundColor = "Orange";
newElement2.style.padding = "10px";
//attach
newElement.after(newElement2);
console.log(newElement2);
//----------------------------------Manually way-----------------------------------------------------------------------------------------------------

// const list = document.createElement('li');
// list.textContent = "Milk"; //0 index

// const list2 = document.createElement('li');
// list2.textContent = "Butter";  //1 index

// const list3 = document.createElement('li');
// list3.textContent = "Jam"; //2 index

// const ulElement = document.getElementById('listing');
// ulElement.append(list, list2);
// ulElement.prepend(list3);
// // console.log(ulElement);

// //------------to access children

// // console.log(ulElement.children[1]);
// ulElement.children[0].after(list2)  //0 index ka Milk moved after 1index(Butter)
//-------------------Not Optimised bad way but better than Manual way-------------------------------------------------------
// const arr = ["Milk", "Butter", "Jam", "Sugar"];

// const ulElement = document.getElementById('listing');

// for (const food of arr) {
//     // console.log(food);
//     const list = document.createElement('li')
//     list.textContent = food;
//     ulElement.append(list);
// }
//--------------------Optimised------------------------------------------------------------
const arr = ["Milk", "Butter", "Jam", "Sugar"];

const ulElement = document.getElementById('listing');
const fragment = document.createDocumentFragment();

for (const food of arr) {
    // console.log(food);
    const list = document.createElement('li')
    list.textContent = food;
    fragment.append(list);
}
ulElement.append(fragment);

const s1 = document.getElementById('first');
s1.remove();

// const monthName =  document.getElementById('month')
// console.log(month.children);
// console.log(month.childNodes);

const lister = document.createElement("li");
lister.textContent = "Help";
month.insertAdjacentElement('afterbegin', lister)



