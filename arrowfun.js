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

console.log(this);

// once upon a time when java used to have only one engine which was in browser
//but after few years multiple environment came out like node,dino
//but now we have standalone engine
 