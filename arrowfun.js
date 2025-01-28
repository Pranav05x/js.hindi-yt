const user = {
    username : "pran",
    price : 000,

    WelcomeMessage : function(){
        console.log(`${this.username} , welcome to web`);
        // console.log(this);    (for example)
        

     //this means current context, we use this only in {} 
     //this refers to current context   {}  
    }

}

// user.WelcomeMessage() 
// user.username = "sam"
// user.WelcomeMessage()

// console.log(this);  (for experiment)

// inspect in browser by login : console.log(this)
// once upon a time when java used to have only one engine which was in browser
//but after few years multiple environment came out like node,dino
//but now we have standalone engine

// **********IMP******************
// all the globle objects in browser are window object and thats how we can catch all the windows event like (click and formsubmit)


// ****************ARROWFUNCTION*************************************

// function chai(){
//     let username = "pran"
//     console.log(this.username);
    
// }
//  chai()
 //we cannot access this in function
 //when we run (this) in node environment we get diffrent values

//  ***********************************************************
// another example
//same will happen with variable

// const chai = function(){
//     let username = "pran"
//     console.log(this.username);

// }
// chai()

// *****************************************************************
// arrow function (=>)

// const chai = () => {
//         let username = "pran"
//         console.log(this);
    
//     }
//     chai()
// whats diffrence between normal function anf arrowfunction?

// with arrow functions there are no binding of this .
//  In regular functions the (this) keyword represented the object that
//  called the function, which could be the window,
//  the document, a button or whatever.
//  With arrow functions the (this) keyword
//  always represents the object that defined the arrow function

// ****************************************************

// syntax for arrowfunction is () =>{}

    // const addtwo = (num1,num2) =>{
    //     return num1 + num2
    // }
    // console.log(addtwo(5,5))

    // **********************************************************
    // implesit return method
    // in this method we dont use 
    const addtwo = (num1,num2) =>{
        return num1 + num2
    }
    const addtwo = (num1,num2) =>{
        return num1 + num2
    }
    console.log(addtwo(5,5))