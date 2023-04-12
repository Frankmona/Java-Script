// Nested function scope
// let a = 20;
// function outer() {
//   let b = 30;
//   function inner() {
//     let c = 40;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// Closure

// function outer() {
//   let counter = 2;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer();

// function outer() {
//   let counter = 2;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();

// Function currying

// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(10, 30, 20));

// curry fuctionacts like turning sum(10,30,20) to sum(10)(30)(20) nesting functions

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

// Currying is a transformation of functions that translates a function from callable as f (a, b, c) into callable as f (a) (b) (c).
// const curriedsum = curry(sum);

// console.log(curriedsum(10)(20)(30));

// const add2 = curriedsum(10);
// const add3 = add2(20);
// const add4 = add3(30);

// console.log(add4);

// THIS - it makes function reusable by allowing you specify the object value.
// 4 ways to determin THIS  in javascript
// Implicit binding
// explicit binding
// new binding
// default binding

// Example of implicit binding rule

// function sayMyName(name) {
//   console.log("Hello my name " + name);
// }
// sayMyName("frank");

// const person = {
//   name: "Frank",
//   sayMyName: function () {
//     console.log("my name is " + this.name);
//   },
// };
// person.sayMyName();

// Example of Explicit binding rule

// function sayMyName() {
//   console.log("my name is " + this.name);
// }
// sayMyName.call(person);

// New binding
// function person(name) {
//   this.name = name;
// }
// const p1 = new person("frank");
// const p2 = new person("mona");

// console.log(p1.name, p2.name);

// Default binding
// these is met when the above bindings are not meant then javascript pick the default binding.

// sayMyName();

// prototype

// function person(Fname, Lname) {
//   this.firstname = Fname;
//   this.lastname = Lname;
// }

// const person1 = new person("frank", "mona");
// const person2 = new person("oguche", "mona");

// person2.getFullName = function () {
//   return this.firstname + " " + this.lastname;
// };
// console.log(person2.getFullName());

// function person(Fname, Lname) {
//   this.firstname = Fname;
//   this.lastname = Lname;
// }

// const person1 = new person("frank", "mona");
// const person2 = new person("oguche", "mona");

// person.prototype.getFullName = function () {
//   return this.firstname + " " + this.lastname;
// };
// console.log(person1.getFullName());
// console.log(person2.getFullName());

// Inheriting prototype
