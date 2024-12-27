//merging two arrays , arrays will consider whole index as array e.g if 

// when we push values in array
// 0 = thor
// 1 = iron
// 2 = hulk
// 3 = ["superman","bat","flash"]


// const marvel = ["thor","iron","hulk"]

// const dc = ["superman","bat","flash"]

//  marvel.push(dc)
//  console.log(marvel.includes("hulk")); 
 // conclusion : after merging(push) and by using boolean type i get to know array not taking another array`s value
 
//     //output : superman
 // its not goof sentax at all

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//concat and sprade oprator both works same

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 
// we use flat(infinity) operator to arrange array can also give dept instated of infinity
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))   //isarray is boolean value
console.log(Array.from("pran")) 
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//  e.g  console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
 
 
console.log(Array.from({name : "hitesh"})) // interesting cause array gets confuse



// console.log(from);

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

//of() is same as from 
// array.of() method is an inbuilt method in JavaScript that creates a new array instance with variables present as the argument of the method.


 
 
 