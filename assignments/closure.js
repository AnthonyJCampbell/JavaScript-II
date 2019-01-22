// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const lastname = "Bond";
greet = () => {
  const firstname = "James";
  return (`The name's ${lastname}, ${firstname} ${lastname}`);
}




// ==== Challenge 2: Create a counter function ====

const outer = () => {
  let countercounter = 0;
  return function inner() {
    return countercounter += 1;
  }; 
  // Return a function that when invoked increments and returns a counter variable.
};
const myLiberatedInner = outer();
console.log(myLiberatedInner());
console.log(myLiberatedInner());
console.log(myLiberatedInner());
console.log(myLiberatedInner());


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// I REALLY struggled with closure. I can't get this baby to work. If you've got the time, Orlando, could you walk me through this sometimes?

const counterFactory = () => {
  let myCounter = 0;
  return (
    function add(){
      return myCounter +=1;
    }, 
    function minus(){
      return myCounter -= 1;
    });
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
const aBetterCounter = counterFactory();
console.log(aBetterCounter());