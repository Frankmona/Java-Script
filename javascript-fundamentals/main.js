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

// connecting the dots

// string properties and methods

// const person = {
//   // property
//   name: "peter",
//   //  method
//   greeting: function () {
//     console.log("frankmamam");
//   },
// };

// console.log(person.name);
// person.greeting();

// let text = " peter james";
// let result = text.length;
// methods
// console.log(result);
// console.log(text.length);
// console.log(typeof text);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(6));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf("t"));
// console.log(text.trim());
// console.log(text.trim().startsWith("peter"));

// // chaining methods
// console.log(text.trim().toLowerCase().startsWith("peter"));

// console.log(text.includes("ames"));
// console.log(text.slice(0, 9));
// console.log(text.slice(-6));

// templates literals

// const name = "frank";
// const age = "50";
// const sentence = "Hello it's " + name + " and he is " + age + " year's old!";
// console.log(sentence);

// // using trmplate literals we using backticks which is `` and rsther thsn using + for concatenatrion we use ${}

// const values = `Hello it's ${name} and he is ${age} years old!`;
// console.log(values);

// array properties and method

// let name = ["frank", "pogba", "mbabpe", "messi", "curry", 3, 5, 1];

// length
// console.log(name.length);
// console.log(name[name.length - 1]);

// concat

// lastNames = ["oguche", "mona", "dembele", "paulo"];
// const allNames = name.concat(lastNames);
// console.log(allNames);

// reversal
// console.log(allNames.reverse());

// unshift---- use for adding a value at the begining of the array

// allNames.unshift("olga");
// allNames.unshift("kyline");
// console.log(allNames);

// shift--- use for removing a value from the begining of an array
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// push ---use for adding a value at the end of the array
// allNames.push("olga");
// allNames.push("kyline");
// console.log(allNames.reverse());

// Pop--use for removing a value from the begining og an array

// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// splice --mutates the original array
// (0,3)- means from array zero take away three values

// const specificNames = allNames.splice(0, 3);
// console.log(allNames);

// arrays and for loop

// const names = ["ampy", "vulte", "perrito", "echo"];
// const lastName = "sheake";
// let newArray = [];

// // for loop

// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   const fullName = `${names[i]} ${lastName}`;
//   //   console.log(names[i]);
//   //   newArray.unshift(names[i]);
//   //   newArray.push(`${names[i]} ${lastName}`);
//   newArray.push(fullName);
// }
// console.log(newArray);

// example using function, for loop, if statemnet , array, return

// const gas = [10, 20, 30, 40, 50];
// const food = [30, 20, 10];

// function calculateTotal(arr) {
//   let total = 0;
//   for (i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   if (total > 100) {
//     console.log(`you are spending too much than 100 dollars`);
//     return total;
//   }
//   console.log(`you are spending less than limit`);

//   return total;
// }
// const getGas = calculateTotal(gas);
// const getFood = calculateTotal(food);
// const extraSpent = calculateTotal([100, 200, 300]);
// const transportFare = calculateTotal([200, 300]);

// console.log({
//   gas: getGas,
//   food: getFood,
//   extra: extraSpent,
//   tFare: transportFare,
// });

// local scope can only be accesed within the {}

// function calculate() {
//   const name = "frank";
//   const age = "45";
//   console.log(`my name is ${name} and am ${age} years old!`);
// }
// calculate();

// variable lookup
// javascript check the variable from the immediate local scope and if it cant find the value init it searches the global scope

// e.g using const globaVariable

// const globalVariable = 5;
// // here the js checks inside the { } and see no globalVariable however its searches the global scope and uses it
// function add(num1, num2) {
//   // const globalVariable = 10;
//   const results = num1 + num2 + globalVariable;
//   function multiply() {
//     // const globalVariable = 20;
//     const multiplyResult = results * globalVariable;
//     console.log(multiplyResult);
//   }
//   multiply();
//   return results;
// }
// console.log(add(3, 5));

// callback function is a function that is been passed in another function as an agument

// function Morning(name) {
//   return `Goodmorning ${name.toUpperCase()}`;
// }

// function greet(name, callbk) {
//   const myName = "johne";
//   console.log(`${callbk(name)}, my name is ${myName}`);
// }

// greet("borrito", Morning);

// powerful array method
// forEach, map, filter, find, reduce

// forEach -- it doesnt return a new array

// const people = [
//   { name: "bob", age: 24, position: "front_end_developer", id: 1 },
//   { name: "peter", age: 28, position: "back_end_developer", id: 2 },
//   { name: "susy", age: 14, position: "ui/ux_designer", id: 3 },
// ];

// function showPerson(person) {
//   //   console.log(person.name.toUpperCase());
//   console.log(person);
// }

// // people.forEach(showPerson);

// // also the above can be done by passing the function annonymously
// people.forEach(function (item) {
//   console.log(item.name.toLowerCase());
// });

// Map  -- it does return a  new array
// it always depend on the original array

// using the above const

// const age = people.map(function (person) {
//   //   return person.age;
//   //   map allowu to modify
//   return person.age + 20;
// });
// console.log(age);

// using map to change and add new object as seen below
// const newPeople = people.map(function (person) {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age,
//   };
// });

// console.log(newPeople);

// const allNames = people.map(function (pern) {
//   return `<h1>${pern.name}</h1>`;
// });

// document.body.innerHTML = allNames.join(",-");

// console.log(allNames);

// filter -- returns a new array and also manipulate the size of the  array also returns base on condition.

// const youngPeople = people.filter(function (yourage) {
//   return yourage.age <= 25;
// });
// console.log(youngPeople);

// const developer = people.filter(function (jobrole) {
//   return jobrole.position == `back_end_developer`;
// });
// console.log(developer);

// find -- returns a single object, returns first match, if no match its undefined, great for getting unique value(id  )

// const finder = people.find(function (peace) {
//   return peace.id == 3;
// });
// console.log(finder);

// reduce --- iterates, callback function,
//  reduces to a single value-numer,array,object
// 1 parameter ('acc')-  total of all calculations
// 2 parameter ('curr') - current iteration/value

// const people = [
//   { name: "bob", age: 24, position: "front_end_developer", id: 1, salary: 500 },
//   {
//     name: "peter",
//     age: 28,
//     position: "back_end_developer",
//     id: 2,
//     salary: 600,
//   },
//   { name: "susy", age: 14, position: "ui/ux_designer", id: 3, salary: 700 },
// ];

// const total = people.reduce(function (accum, current) {
//   console.log(`total is ${accum}`);
//   console.log(`current amount is ${current.salary}`);
//   accum += current.salary;
//   return accum;
// }, 500);

// console.log(total);

// Math operator-- standard built in object always available

// floor --- use to round up number by removing the decima
// const number = 4.5343;
// const result = Math.floor(number);

// ceil --- rounds up to the nearest whole number
// const number = 4.2343;
// const result = Math.ceil(number);

// sqrt -- to find square root
// const number = 25;
// const result = Math.sqrt(number);

// min
// const result = Math.min(2, 3, 4, 10, 23);

// max
// const result = Math.max(2, 3, 4, 10, 23);

// random --gives random numbers
// const result = Math.random();

// to avoid the random numbers from having decimal we use the below method
// const result = Math.ceil(Math.random() * 10);
// or
// const result = Math.floor(Math.random() * 10 + 1);
// console.log(result);

// Date
// const months = [
//   "january",
//   "february",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "october",
//   "november",
//   "december",
// ];

// const days = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// const date = new Date();
// // console.log(date);

// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());

// const today = ` today is ${date.getDate()}, ${days[day]}, ${
//   months[month]
// }, ${date.getFullYear()}`;
// console.log(today);

// document.body.innerHTML = today;

// DOM -- Document object model

// getElementByID('element') -- this method helps to
// 1. select the  element or group of element that you Want
// 2. decide the effect we want to apply  on the selection.

// const h1 = document.getElementById("title");
// h1.style.color = "red";

// or use the below

// document.getElementById("title").style.color = "blue";

// const btn = document.getElementById("btn");
// btn.style.backgroundColor = "blue";
// btn.style.color = "white";

// or use the below

// document.getElementById("btn").style.backgroundColor = "pink";

// getElementByTagName("TagName");
// 1. it select using array like object

// const heading = document.getElementsByTagName("h2");
// heading[1].style.color = "green";

// const items = document.getElementsByTagName("li");
// items[3].style.color = "red";

// to make use of a forEach method here we use the ...
// the three doys in the array bracket helps to convert the items into array so a forEach method can be used
// const betterItem = [...items];

// betterItem.forEach(function (item) {
//   console.log(item);
// });

// getElementByClassName('classname')

// const listItems = document.getElementsByClassName("special");
// listItems[2].style.color = "orange";
// listItems[0].style.color = "red";

// querySelector('any css') -- select single
// querySelectorAll('any css') --  selects all

const results = document.querySelector("#results");
results.style.backgroundColor = "purple";

const item = document.querySelector(".special");
item.style.color = "white";

const lastItem = document.querySelector("li:last-child");
lastItem.style.color = "white";
console.log(lastItem);
