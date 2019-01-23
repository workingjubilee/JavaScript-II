// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

{
  // This is a closure.
  // I don't mean to be sassy but this is as simple as it gets.
  // Not very useful, though.
}


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // hmm...
  // let newValue = 1;
  // let oldValue = oldValue + newValue;
  // return oldValue;
  // whoops, that doesn't work. needs to be initialized at 0.
  // Return a function that when invoked increments and returns a counter variable.
  // WHAT.
  // WHAT?!
  // WHAAAAT
  // I had no idea how to make this work so I rewatched the video.
  let count = 0;
  return () => {
    // slightly longer version:
    // count++;
    // return count;

    // why does this return 0 and then 1?
    // return count++;

    // This one works "properly"? How?
    return ++count;
  }
};
// Example usage:
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
