var number1 = Number(prompt("Enter first Number"));
var operation = "";
var number2 = 0;
var result=0;

while(operation !=null)
{
    operation = prompt("Enter the operation ");
    number2 = Number(prompt("Enter second number"));

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
       break;
    }
    number1=x;
}