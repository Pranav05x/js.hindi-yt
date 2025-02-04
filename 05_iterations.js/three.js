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