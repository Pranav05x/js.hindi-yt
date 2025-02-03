const useremail = "pran@gmail.com"

if (useremail) {
    console.log(`is looged in`);
}else {
    console.log(`not logged in`);
}

// falsy values
// false , 0 , -0 , BigInt , "" , null , undefined , NAN
// *********************************************************
// truthy values
// "0" , `false` " " , [] , {} , function(){}

if (useremail.length === 0) {
    console.log(`empty`);
    
} 

const empthyobj = {}
if (Object.keys(empthyobj).length === 0) {
    console.log(`obj is empty`);
    
}
 