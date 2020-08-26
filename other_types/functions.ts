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
