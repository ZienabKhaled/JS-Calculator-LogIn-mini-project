var Username = prompt("Enter your username");
var password = prompt("Enter your password");
console.log(Username , password) ;

    if ( Username == "admin" && password == "421$$")
    {
    console.log("welcome login sucsess");
    }
    else if (Username !="admin" && password == "421$$") 
    {
        console.log("your username is incorrect");
    }
    else 
    {
        console.log("your password is incorrect");
       
    }