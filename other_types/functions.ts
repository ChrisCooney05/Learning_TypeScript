function add(num1: number, num2: number): string {
  return `${num1 + num2}`;
}

/* 
we can also say what type we want a function to return, usually its best to let 
TS infer it for you, ut if you want to be extra sure, you can. Above, I know that I need
the result to be supplied as a string, so before adding a return I let the function know that
*/

function printInput(value: string): void {
  console.log(value);
}

/*
Void is the type you will get when nothing is being returned, whilst JS will say this has returned 
undefined TS will differentiate and class a log as void.
*/

let addContainer: Function;

addContainer = add;
//addContainer = printInput

console.log(addContainer(2, 6));

/* 
We can also use Function as a type, but, keep in mind that addContainer = printInput will not cause an error
as it is still a function. We need to be more concise with our type and we can be.
*/

let valueLogger: (val: string) => void;
valueLogger = printInput;

/*
This says, I want this variable to hold a function that takes one argument, a string and returns nothing
anything else will cause an error
*/
