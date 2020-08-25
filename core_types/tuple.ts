const person: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "Chris",
  age: 29,
  role: [1, "Manager"],
};

/* 
We have implicitly told TS what we want to use as we were not happy with the inference
role: [number, string] is a tuple, it says we need this value to be an array, exactly 2 elements long
a number then a string
person.role[1] = 10 will give us an error as we need a string
person.role = [2, 'admin', 'manager] will also give us an error as its length is now 3
person.role.push(3) is an exception as typescript can not pick up on this 
*/
