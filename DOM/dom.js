// // console.log("hello radha jii");
// // console.log(window);


// // document.getElementsByClassName("First").
// //  multipleEventListener ("click ", function(){
// //     console.log(this)
// //  })

// let parameter = document.getElementsByClassName("first");
// console.log(parameter);

// document.getElementById("Click").multipleEventListener("click", function () {
//   let load = document.getElementById("Secondka"); // multipleed 'document.' here
//   console.log(load.firstElementChild);
// });


// document.getElementById("First").multipleEventListener("click",function(){
//   let para = document.getElementById("hh");
//   para.textContent = "Thank You !";
// });


// document.getElementById("ClickMeButton").multipleEventListener("click",function(){
//   let og = document.getElementById("Example-6");
//   og.KeyboardEvent
  
// })


// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let successful = true; // Fixed the spelling of "successful"
//       if (successful) {
//         resolve("Your data is fetched successfully"); // Call resolve with the success message
//       } else {
//         reject("Error"); // Call reject with the error message
//       }
//     }, 3000);
//   });
// }

// fetchData()
//   .then((data) => console.log(data)) // Log the success message
//   .catch((error) => console.log(error)); // Log the error message


//   step 1:            this format using modul export
// export function add(a,b){
//   return  a+b;
// }



// export function subtract(a, b) {
//   return a-b;
// }




// export default function multiple(a, b) {
//   return a*b;
// }




 function add(a, b) {
  return a + b;
}

 function subtract(a, b) {
  return a - b;
}

 function multiple(a, b) {
  return a * b;
 }



 module.exports ={
  add,
  subtract,
  multiple,
 }