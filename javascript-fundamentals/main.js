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

// const results = document.querySelector("#results");
// results.style.backgroundColor = "purple";

// const item = document.querySelector(".special");
// item.style.color = "white";

// const lastItem = document.querySelector("li:last-child");
// lastItem.style.color = "white";
// console.log(lastItem);

// const list = document.querySelectorAll(".special");
// // using forEach

// list.forEach(function (item) {
//   console.log(item);
//   item.style.color = "red";
// });

// childNodes ---return of child nodes and white spaces which is treated as text node
// select element or group  of element that we want
// decide the effect we want to apply  on the selection

// children
// firstChild
// lastChild

// const results = document.querySelector("#results");

// const allChildren = results.childNodes;
// // console.log(allChildren);

// const children = results.children;
// // console.log(children);
// // console.log(children[3]);

// console.log(results.firstChild);
// console.log(results.lastChild);

// parentElement

// const heading = document.querySelector("h2");
// console.log(heading.parentElement.parentElement);

// const parent = heading.parentElement;
// heading.style.color = "red";

// previousSibiling
// nextSibiling
// returnWhitespace

// const first = document.querySelector(".first");
// console.log(first);

// use this to target the nextSibling and did the ,nextSibling twice because the first one returns a text whitespace
// const second = (first.nextSibling.nextSibling.style.color = "blue");

// console.log(second);

// previousSibiling
// const last = document.querySelector("#last");
// // console.log(last);

// const third = (last.previousSibling.previousSibling.style.color = "pink");
// console.log(third);

// previousElementSibiling
// nextElementSibiling

// const first = document.querySelector(".first");
// const second = (first.nextElementSibling.style.color = "green");

// const last = document.querySelector("#last");
// const third = (last.previousElementSibling.style.color = "pink");

// nodeValue
// textContent

// const item = document.getElementById("special");

// const value = item.firstChild.nodeValue;
// const value = item.childNodes[0].nodeValue;
// console.log(value);

// const easyV = document.getElementById("special");
// const easy = easyV.textContent;
// console.log(easy);

// getAttribute()
// setAttrubute()

// const first = document.querySelector(".first");
// const classValue = first.getAttribute("class");
// console.log(classValue);

// getAttribute using ID

// const first = document.querySelector(".first");
// const idValue = first.getAttribute("id");
// console.log(idValue);

// getAttribute for links

// const link = document.getElementById("link");

// const showLink = link.getAttribute("href");
// console.log(showLink);

// setAttributes

// const last = link.nextElementSibling;
// last.setAttribute("class", "first");
// last.textContent = "i am frank now";
// console.log(last);

// className -- use to check the class and also to assign a new class
// classList

// const first = document.getElementById("first");
// const second = document.getElementById("second");
// const third = document.getElementById("third");

// const classValue = first.className;
// console.log(classValue);

// assign className

// second.className = "color";
// second.classList.add("text"); --u can use this to add a class on top another active class

// creatElement("element");
// creatTextNode("text content");
// Element.appendChild(childElement);

// const result = document.querySelector("#result");

// create an empty element
// const bodyDiv = document.createElement("div");

// create textNode

// const text = document.createTextNode("i need a remote job");

// to append

// bodyDiv.appendChild(text);

// console.log(bodyDiv);

// to append it so it can show on the UI
// document.body.appendChild(bodyDiv);

// const heading = document.createElement("h2");
// const headingText = document.createTextNode(
//   "hello you will get a remote job good pay soooon!"
// );
// heading.appendChild(headingText);
// heading.classList.add("blue");

// result.appendChild(heading);

// insertBefore("element", "location"); -- helps to specify where u want to add an element to...

// const result = document.querySelector("#result");

// // create an empty element
// const bodyDiv = document.createElement("div");

// // create textNode

// const text = document.createTextNode("i need a remote job");

// // to append

// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv, result);

// replaceChild(new, old); -- it replaces the old elemnt with the new one

// const smallHeading = document.createElement("h6");
// const smallText = document.createTextNode("God will do it");
// smallHeading.classList.add("color");
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading, bodyDiv);

// prepend
// innerText

// const header = document.createElement("h2");
// header.innerText = `God go do am!`;
// document.body.prepend(header);

// remove
// removeChild -- both aere use to remove element from the DOM

// const result = document.querySelector("#result");
// // // result.remove();

// // using the removce child here instead of targeting the entire document we target the particular id  which  was result
// const heading = result.querySelector("h1");
// result.removeChild(heading);

// innerHTML
// textContent

// const first = document.getElementById("first");
// const div = document.getElementById("second");
// const item = document.querySelector(".item");

// console.log(div.textContent);
// console.log(first.innerHTML);

// // using the below to do same just as createTextNode

// const ul = document.createElement("ul");
// ul.innerHTML = `<li class = "pep">frank</li><li>mona</li>`;
// // document.body.prepend(ul);

// document.body.appendChild(ul);

// CSS
// const random = document.querySelector(".random");

// random.classList.add("color");

// selectElement
// addEventListener('event', callBackFunction)
// what do event do?

// const btn = document.querySelector(".btn");
// const heading = document.querySelector("h2");

// btn.addEventListener("click", function () {
//   console.log(`this me`);
// });

// here we used annonmous function
// btn.addEventListener("click", function () {
//   heading.classList.add("blue");
// });

// here we use normal function

// function eventlist() {
//   heading.classList.add("blue");
// }

// btn.addEventListener("click", eventlist);

// adding if statement

// function eventlist() {
//   const hasclass = heading.classList.contains("blue");
//   if (hasclass) {
//     heading.classList.remove("blue");
//   } else {
//     heading.classList.add("blue");
//   }
// }

// btn.addEventListener("click", eventlist);

// clicks --fires after full action occurs
// mouseDown -- button is pressed
// mouseUp -- button is released
// mouseEnter -- move unto another Element
// mouseLeave -- moved out of an element

// const btn = document.querySelector(".btn");
// const heading = document.querySelector("h2");

// btn.addEventListener("click", function () {
//   console.log(`u clicked`);
// });

// btn.addEventListener("mousedown", function () {
//   console.log(`button pressed`);
// });

// btn.addEventListener("mouseup", function () {
//   console.log(`u realesed`);
// });

// heading.addEventListener("mouseenter", function () {
//   heading.classList.add("color");
// });

// heading.addEventListener("mouseleave", function () {
//   heading.classList.remove("color");
// });

// keypress -- when key is pressed
// keydown -- when the key is down
// keyup -- when key is released

// const nameInput = document.getElementById("name");

// nameInput.addEventListener("keypress", function () {
//   console.log("miami");
// });

// nameInput.addEventListener("keydown", function () {
//   console.log("miami");
// });

// nameInput.addEventListener("keyup", function () {
//   console.log("miami");
// });

// event object argument e, evt,event
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// prevent default() - prevent defalt behaviour

// const heading = document.querySelector("h2");
// const btn = document.querySelector(".btn");

// heading.addEventListener("click", function (event) {
//   event.currentTarget.classList.add("blue");
// });

// btn.addEventListener("click", function (event) {
//   console.log(event.type);
// });

// preventDefault() - preventts default behaviour for example the link is placed below and when u click it takes u to the top thats the default behaviour but in other to avoid that we use that method

// const link = document.getElementById("link");

// // using normal function for the eveentListner

// function linkFunc(event) {
//   event.preventDefault();
// }

// link.addEventListener("click", linkFunc);

// currentTarget - always efers to the element to which the event handler has been attched to
// target -- identifies the element on which the event occured

// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     // event.currentTarget.style.color = "green";
//     // console.log(event.currentTarget);

//   });
// });

// it allows us to select dynamic element
// event propagation -- orders the event are fired
// event bubbling -- clicked element first then bubbles up -- default
// event capturing -- fires at the rrot and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".listItems");

function showBubling(event) {
  console.log(`current target`, event.currentTarget);
  console.log(`target`, event.target);

  if (event.target.classList.contains("link")) {
    console.log(`Mona you clicked it!`);
  } else {
    console.log(`click again`);
  }
}
container.addEventListener("click", showBubling);
list.addEventListener("click", showBubling);
