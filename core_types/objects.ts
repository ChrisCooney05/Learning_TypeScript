const person = {
  name: "Chris",
  age: 29,
  hobbies: ["Gaming", "Cooking"],
};
/*TypeScript will infer that name: string, age: number without telling it. 
we can set types (as seen below) but its not best practice 
*/
console.log(person);

const person2: {
  name: string;
  age: number;
} = {
  name: "Chris",
  age: 29,
};
//both will give the same output but instead if inference, we has assigned types.
console.log(person2);

let stringArray: string[];
stringArray = ["one", "two"];
//string[] means this variable should hold nothing but strings in an array, anything else will cause an error

let numberArray: number[];
numberArray = [1, 2, 3];
/*As with above, anything but a number will cause an error. we can also use any[] for mixed arrays, but this 
is not really want TypeScript is for
*/

for (const hobby of person.hobbies) {
  console.log(hobby);
  //hobby.map() !!ERROR!!
}
/*Type inference is great as if we go to use a method, or do anything that cant be used on a string we will get an error
hobby.map() will cause the following error - Property 'map' does not exist on type 'string'.
this saves us from trying to do anything that will not be possible
*/
