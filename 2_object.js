// singleton objects by using constructor********************


// const tinderuser = new Object() //singleton object

// both are same but whenever intreviwer ask question give em diffece

const tinderuser = {} //non singleton object

tinderuser.id = "123abc"
tinderuser.name = "pran"
tinderuser.isLoggedIn = false
    

// console.log(tinderuser);

const regularuser = {
    email : "sum@gmail.com",
    fullname : {
        userfullname: {
            firstname : "pranav",
            lastname : "bhoir"
        }
    }

}

// console.log(regularuser.fullname.userfullname.firstname);


 


