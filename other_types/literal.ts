function calculator(
  num1: number,
  num2: number,
  method: "add" | "subtract" | "multiply" | "divide"
) {
  switch (method) {
    case "add":
      console.log(num1 + num2);
    case "subtract":
      console.log(num1 - num2);
    case "multiply":
      console.log(num1 * num2);
    case "divide":
      console.log(num1 / num2);
  }
}

calculator(1, 6, "add");
calculator(5, 10, "multiply");
calculator(6, 3, "divide");

/* 
Literals are where you define valid inputs, so in this case method can only be one of 4 things,
anything else will cause TS to raise an error
*/
