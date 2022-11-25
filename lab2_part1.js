var number1 = Number(prompt("Enter first Number"));
var operation = (prompt("Enter an operation"));
var number2 = Number(prompt("Enter second Number"));
console.log (number1 , operation ,number2 );

switch (operation)
{
    case "+" :
        x = number1 + number2 ;
        console.log("The sum equals to " + x);
        break;
    case "*":
        x = number1*number2 ;
   console.log("The muliple equals to " + x);
        break;
    case "-":
       x = number1-number2 ;
       console.log("The subtract equals to " + x);
       break;
    case "/":
        x= number1/number2 ;
        
console.log("the division equals to " + x);
    break;
    case "%" :
       x = number1 % number2 ;
       console.log("the moduls equals to " + x);
}

