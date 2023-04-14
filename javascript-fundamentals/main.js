// document.write("hello frank");
// alert("hello people");
// console.log("God bless you");

// ** A varaible must begin with letters or $ or _

// let $people = "us";
// console.log($people);

// string concatenation
// const firstName = "frank";
// const lastName = "oguche";
// const fullName = firstName + " " + lastName;
// console.log("Hello my name is " + fullName);

// const website = "udemy";
// const url = "www." + website + ".com";
// console.log(url);

// let number = 23;
// number += 5;

// let number = 23;
// number++;

// console.log(number);

// strings
//  type of use to tell what type is the data type
// const text = "frank";
// console.log(typeof text);

// array

// const friends = ["frank", "mona", "oguche", 21, "mercy"];
// console.log(friends[4]);

// let bestfriend = friends[2];
// console.log(bestfriend);

// function

// helps to reduce repeated of code
// function greet(name) {
//   console.log("Hello " + name);
// }
// greet("sussy");
// greet("frank");
// greet("mona");

// using 1inch = 2.54cm
// function calculate(value) {
//   const newValue = value * 2.54;
//   console.log("The value is " + value * 2.54 + " cm");
//   //   return value * 2.54;
//   return newValue;
// }
// const wallWidth = 10;
// const wallHeight = 5;
// const width = calculate(wallWidth);
// const height = calculate(wallHeight);
// const dimension = [width * height];
// console.log(dimension + "cm");

// function declaration

// function addvalues(num1, num2) {
//   return num1 + num2;
// }

// const firstvalue = addvalues(3, 5);
// const secondvalue = addvalues(1, 3);

// // function expression
// const add = function addvalues(num1, num2) {
//   return num1 + num2;
// };

// // const thirdvalue = add(5, 4);
// const values = [firstvalue, secondvalue, add(5, 6)];
// console.log(values);

// objects;
// objects show the properties e.t.c  e.g using a car as an object its properties  having red color been toyota and all that

// const person = {
//   firstName: "frank",
//   lastName: "oguche",
//   age: 50,
//   education: false,
//   married: true,
//   sibilings: ["mbape", "paulo", "pogba", "kylian"],
//   greeting: function () {
//     console.log("hello welcome to my page ");
//   },
// };
// const age = person.age;
// console.log(age);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.sibilings[2]);
// person.greeting();

let x = 10;
y = 5;
const isValid = x > 8 && 8 > y;
console.log(isValid);
