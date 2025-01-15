//A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output

// function_functionname()_function systax

//definition of function

function sayMyName () {
 console.log("p");
 console.log("r");
 console.log("a");
 console.log("n");
 console.log("a");
 console.log("v");

}

//down below there is reference and  exectue
// sayMyName ()

                       //parameters  
// function functionname(number1, number2){

//     console.log(number1 + number2);
   

// }


function addTwoNumberse(number1, number2){

    //metod no.1
   // let result = number1 + number2
   // return result

   //method no.2 is easy
   return number1 + number2

   //once we return the function ,other values wont work: e.g down below
   console.log("pranav");
}
                  //arguments
const result = addTwoNumberse(4,5)
//we can also store function in variable

// console.log("result", result);


function loginUserMessage(username = "pran"){ //we took = pran for e.g
    // if (username === undefined) {   //also (!username) and (===undefined) are same 
    if(!username){   
    console.log("please enter a username");
        return
    }
    return `${username} "just logged in"`

}
// console.log(loginUserMessage("pranav"));

// console.log(loginUserMessage());


***************************************************************************

