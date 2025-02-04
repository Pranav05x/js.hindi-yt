// for of 

// array specific loop

// ["","",""]
// [{}, {}, {}]

// ******************************************************************
//syntax of forof loop:
//  for (const element of object) {  
// }

// we can put (i) at place of (element) as we used to do 
// as u can see there is const too so asume element is varianle (i)
// also at the spot where (object) is placed,we enter there out (arrayname)


const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeings = "hello bre world!"
// how to use break and continue in here?
for (const greet of greeings) {
    console.log(`each char is ${greet}`);
    
}

// *****************************************************************

// map

// definition: The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value

// there are uniqe value in map
// there is no duplicate value in map

const map = new Map()
map.set('IN', "India")
map.set('US', "United states of america")
map.set('FR', "Frace")
map.set('UK', "United Kingdom")
map.set('IN', "India")

// console.log(map);

 for (const [key , value] of map) {
    // console.log(key ,':-', value);
    // in map we can also add key and value
    // squre bracket is [must] for( key and value) both
    // we will also got destructing of array in here
 }
// ************************************************************
// forof loop on object:

const myobj = {
    game1 : 'nfs',
    game2 : 'spideman'
}

// for (const [key,value] of myobj) {
//     console.log(key ,':-', value);
    
// }   //this syntax not working here
