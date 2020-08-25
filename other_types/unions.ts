function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = `${input1}${input2}`;
  }
  console.log(result);
}

combine(3, 6);
combine("Dave", "Williams");

/*
unions are used when you need multiple types of input, we define them with the pipe operator
number | string means number or string. if we just try to return input1 + input2 TS
will give us an error, so we need to be a bit more implicit about only returning a number or
converting to a string
*/
