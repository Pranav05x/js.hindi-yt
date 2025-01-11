// there are two methos to declear objects

// 1.singleton 
// 2.object literals 

// Object literals

const mysym = Symbol("key1")
 
const jsuser = {
     name : "pranav",
    [mysym] : "mykey1",
    email : "pranav@google.com",
    age : 24,
    location : "mumnbai",
    isloggedin : false,
    lasLoginDays : ["monday", "sunday"]
 
}

console.log(jsuser.email);    
console.log(jsuser["email"]);
console.log(jsuser[mysym]);


