// async traditionalmmethod

// Timeout&intervals

// setTimeout -- this function execute aparticular block of code after the specified time is elasped

// setTimeout(Function,duration, parameter1, parameter2,... )

// function greet() {
//   console.log("Hello");
// }

// setTimeout(greet, 2000);

// function Greeting(name) {
//   this.name = "frank";
//   console.log("Goodmorning " + this.name);
// }

// setTimeout(Greeting, 2000);

// function Greeting(name) {
//   console.log("Goodmorning " + name);
// }

// setTimeout(Greeting, 2000, "Frank");

// To clear setTimeout

// const timeoutid = setTimeout(Greeting, 2000, "Frank");
// clearTimeout(timeoutid);

// setInterval -- use to repeatedly run same code over and over again ot regural interval

// setInterval(Function,duration, parameter1, parameter2,... )

// function greet() {
//   console.log("Kindly provide your name");
// }

// setInterval(greet, 2000);

// To clear setInterval

// const intervalid = setInterval(greet, 2000, "Frank");
// clearInterval(intervalid);

// callbacks -- any function that is passed as an argument to  another function

// function greet(name) {
//   console.log("morning " + name);
// }

// function greetfrank(greetfn) {
//   const name = "frank";
//   greetfn(name);
// }
// greetfrank(greet);

// promises
// resolve is a fxnc when called changes the status of the promise from pendimg  to resolved and rejected  is a fxnc when called changes the status of the promise from pendimg  to rejected

const promise = new promise((resolve, reject) => {});
