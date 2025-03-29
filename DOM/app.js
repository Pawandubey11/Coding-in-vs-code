//            step 1:
// This is the  method to import modul form 


// import multiple from "./dom.js";
// console.log(multiple(2,2));
// import {add,subtract} from "./dom.js"
// console.log(add(2,2));
// console.log(subtract(2,2));



//              step 2:

// This is the  method to import common js form 

//  const t = require("./dom.js")
// console.log(t.add(2,2));
// console.log(t.subtract(2,2));
// console.log(t.multiple(2,2));

// function simulateAsyncTask() {
//   console.log("Task started");

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task finished");
//       resolve(); // Resolve the promise when the task is finished
//     }, 2000);
//   });
// }

// // Using the function with Promises
// simulateAsyncTask().then(() => {
//   console.log("The async task has completed.");
// });

// // Or using async/await
// async function runTask() {
//   await simulateAsyncTask();
//   console.log("The async task has completed.");
// }

// runTask();





function createCounter() {
    let Counter = 0;
     
    return function (){
        Counter++ ;
        return Counter;
    }
}
const Counter = createCounter();
 console.log(Counter);
 


// function createCounter() {
//     let counter = 0; // Use lowercase for variable names to follow conventions

//     return function() {
//         counter++; // Increment the counter
//         return counter; // Return the current value of the counter
//     }
// }

// // Create a counter instance
// const counter = createCounter();

// // Call the counter function and log the results
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3
