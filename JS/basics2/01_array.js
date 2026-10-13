// const a = [2, 3, 54, 65, 11 , 7]
// console.log(a[3]);

const a1 = new Array(11, 22, 33, 44)
// console.log(a1[2]);


//Arayy methods
// a1.push(43)
// console.log(a1);
// a1.pop()
// console.log(a1);
// // a1.unshift(55)
// // a1.shift(55)

// console.log(a1.includes(5)); //does it include that value?
// console.log(a1.indexOf(33)); // returns index of the value
// console.log(a1.indexOf(100)); // returns -1 if thae value dose'nt exist in the array

// const newArr = a1.join()
// console.log(a1);
// console.log(newArr);

//------------slice ansd splice---------------
// console.log("A", a1);

// const myArr = a1.slice(1,3)//starting till end tak ki values but not includes last value.
// console.log(myArr);
// console.log("B", a1);

// const a2 = a1.splice(1,3)// splce me 3rd(last) value bhi include hoti hai
// console.log(a2);
// console.log("C", a2);

//---------------------------------------------------------
const marvelHeros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvelHeros.push(dc_heros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]); //not a good method
//---------------------------------------------------------------
// const allHeros = marvelHeros.concat(dc_heros)
// console.log(allHeros);

//------------spread method---------------------------------
// const all_new_heros = [...marvelHeros, ...dc_heros]
// console.log(all_new_heros);

//--------------------------------------------------------------
// const arr = [1, 2, 3, [4, 5, 6,], 7, [6, 7, 8,[4, 5,]]]
// const real_arr = arr.flat(Infinity)
// console.log(real_arr);
//---------------------------------------------------------------------------
// console.log(Array.isArray("yashasvi"));// to check Is array?
// console.log(Array.from("yashasvi"));// convert karta hai array me

//--------------------------------------------------------------------------
console.log(Array.from({name: "yashasvi"}));// in this case object iterable nhi hai that's why will give emtpty array

const obj = {
    name: "yashasvi",
    age: 19
};

console.log(Object.keys(obj));
//---------------------------------------------------------------------------------------
