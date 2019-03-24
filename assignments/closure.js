// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return function () {
    console.log(count++);
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();

newCounter();
newCounter();
newCounter();
newCounter();
newCounter();
newCounter();
newCounter();
newCounter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;

  return {
    increment: function() {
      console.log(count++);
    },
    decrement: function() {
      console.log(count--);
    }
  }
};

const randomCounter = counterFactory();

let count = 0
let dot = '                                        .';

// setInterval(() => {
//   if(Math.random() >= .5) {
//     dot = [' ', ...dot.split('')].join('');
//     console.log(`${randomCounter.increment()}${dot}`);
//   }
//   else {
//     dot = dot.split('').slice(1, dot.length).join('');
//     console.log(`${randomCounter.decrement()}${dot}`);
//   }
  
  
//   // console.log(`${randomCounter.increment()} ${dot = [' ', ...dot.split('')].join('')}`) : console.log(`${randomCounter.decrement()} ${dot = dot.split('').slice(1, dot.length).join('')}`);


// }, 5);