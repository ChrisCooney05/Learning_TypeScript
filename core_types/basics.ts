function add(
  num1: number,
  num2: number,
  displayResult: boolean,
  formatString: string
) {
  const result = num1 + num2;
  if (displayResult) {
    console.log(formatString + result);
  } else {
    return result;
  }
}

const number1 = 10;
const number2 = 15;
const displayResult = true;
const logString = "The answer is: ";

add(number1, number2, displayResult, logString);

/*three basic types we can user are number, string and boolean. 
By specifying this in our function, we can catch any potential errors
pre runtime. 
changing number1 to string '10' will give us the following error 
Argument of type '"10"' is not assignable to parameter of type 'number'
so by catching this we avoid JS logging 1015 over the answer we wanted 25
*/
