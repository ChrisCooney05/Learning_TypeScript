enum Role {
  ADMIN,
  MANAGER,
  SALES,
}

const staff = {
  name: "Chris",
  age: 29,
  role: Role.SALES,
};

if (staff.role === Role.SALES) {
  console.log("They are in sales");
}

/*
enum is a way to attribute something, usually a number, to more user friendly/readable string. 
on hover, we can see that ADMIN = 0, MANAGER = 1 and SALES = 2. 
We can can change this by doing the following { ADMIN=5, MANAGER, SALES }, now MANAGER = 6 and SALES = 7
We can also change the values to anything we want { ADMIN = 'admin', MANAGER = 10, SALES = true } are all valid enums
*/
