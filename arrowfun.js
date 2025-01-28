const user = {
    username : "pran",
    price : 000,

    WelcomeMessage : function(){
        console.log(`${this.username} , welcome to web`);
        console.log(this);
        

     //this means current context, we use this only in {} 
     //this refers to current context  
    }

}

// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

console.log(this);
