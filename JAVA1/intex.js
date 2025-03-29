console.log("radha jii thank love you maa");

// console.table({city : "jaipur", city: "ara", city:"hdg"});


// let score = 102;
// let islogin = false;
// let name = "pawan";
// let score1 = 102.876;
// let userName = {
//     firstNmae : "pawan",
//     lastNmae : "Dubey"
// }


// console.log(typeof(score));
// console.log(typeof( islogin));
// console.log(typeof (score1));
// console.log(typeof (name));
// console.log(typeof (userName));


// let a = 120;
// let a1 = new Number(120);
// console.log(a);
// console.log(a1);

// console.log(typeof(a));
// console.log(typeof(a1));




// let teaType = ["herabal tea" , "white Tea","black Tea"];

// let teaType1= ["herabal tea", "white Tea", "black Tea"];
// // console.log(teaType);
// // teaType[1] = "jasmin teaType";

// // console.log(teaType);
// let teaType2 = teaType + teaType1;
// console.log(typeof teaType2);


// let sum =0;
// let i=0;
// while(i<6){
   
//    sum = i+sum;
//    i++;

// }
// console.log(sum);



// let teaCollection = [];
// let tea;

// do{
//     tea = prompt(`enter the your favorte tea (type "stop" )`);
//     if (tea!=="stop"){
//         teaCollection.push(tea);
//     }
// }
//     while(tea!==stop)


// let tea = ["green tea" , "balck tea ", "chai","color tea"]
// let tea1 =[];
// for (let index = 0; index < tea.length; index++) {
   
//     if (tea[index] === 'chai'){
//         break;
//     }
//    tea1.push(tea[index]);
// console.log(tea1);


    
    
// // // }

// // function orderTea (teaType){
// //     function conforimOrder(){
// //         return  `order conform and order is chai `;
        
// //     }
// // return conforimOrder();

// // }
// // let orderconforimOrder = orderTea("chai");
// // console.log(orderconforimOrder);



// // function processTeaOOrder (){
// //     function makeTea(earlgreen){
// // return makeTea;

// //     }
// //     re
// // }



// // function makeTea(typeofTea){
// //     return`maker :${typeofTea}`
// // }
// //     function processTeaOOrder(){
// // return teafunction ("earl grey")
// //     }
// // let order = processTeaOOrder(makeTea);
// // console.log(order);


// // let arr = ["green tea" ,"black tea ","chai","oolong tea"];

// // let selectedTeas =[];

// // for (const num of arr) {
// //   if (num==="chai"){
// //     continue;
// //   }
// //   selectedTeas.push(num);
// // }
// // console.log(selectedTeas);



// // // let arr = ["london","new york","Paris","berin"];
// // // let new1 = [];

// // // for (let i=0;i<arr.length;i++){
// // //   if (arr[i] === "Paris"){
// // //     continue;
// // //   }
// // //   new1.push(arr[i]);
// // // }
// // // console.log(new1);



// // // let number = [1,2,3,4,5];
// // // let smallerNumber = [];

// // // for (const arr of number) {
// // //   if(arr ===  4){
// // //     break;
// // //   }
// // //   smallerNumber.push(arr);
// // // }

// // // console.log(smallerNumber);
   


// // let Tea = ["green tea", "black tea ", "chai", "oolong tea"];
// // let now =[];

// // Tea.forEach(arr1 => {
// //   if (arr1 === "chai"){
// //     return;
// //   }
// //   now.push(arr1)
// // });
// // console.log(now)



// // let arr = [2,5,7,9];
// // let new1 =[];

// // for (let i=0;i<arr.length;i++){
// //   if (arr[i] === 7){
// //     continue;
// //   }
// //   new1.push(arr[i]*2);
  
// // }
// // console.log(new1);



// let tea = [
//   "chai",
//   "green tea",
//   "balck tea",
//   "jasmin tea",
//   "herbal tea",
//   "chai",
//   "green tea",
//   "balck tea",
//   "jasmin tea",
//   "herbal tea",
//   ,
//   "chai",
//   "green tea",
//   "balck tea",
//   "jasmin tea",
//   "herbal tea",
// ];
// let shortTea =[];
// for (const arr of tea) {
//   if (arr.length >10){
//     break;
//   }
//   shortTea.push(arr);
// }
// console.log(shortTea);



// let computer = {
//   cup : 12
// }
// let lenevo = {screen : "hd"}
// let totalHardware = {};

// console.log(`lenevo`,lenevo.__proto__);



// function car(make,model){
//   this.make = make;
//   this.model = model;
// }

// let myCar = new car("Tata" ,"safari");
// let MYnewCar = new car("toyoto" , "forutiner");

// console.log(myCar);
// console.log(MYnewCar);


// let car = {
//   brand : "tata",
//   model : "safari".replace ("naono"),
//   year : 2000,

//  start : function (){
//     return `This brand start in ${this.year} And brand name is ${this.brand} and  `
//   }
// }
// console.log(car.start());


/// inhericatance 

// class Vehicle {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     start() {
//         return `This car is from ${this.make} and the model is ${this.model}`;
//     }
// }

// class TwoVehicle extends Vehicle {
//     getEndMessage() {
//         return `This car ends from user but is made from ${this.make} and the model is ${this.model}`;
//     }
// }

// let myCar = new TwoVehicle("Tata", "Safari");
// console.log(myCar.start()); 
// console.log(myCar.getEndMessage());





// class book {
//     constructor  (price , publicYear){
//         this.price = price;
//         this.publicYear = publicYear;
//     }
//     radhul(){
//         return `Rahul Buy the book on the price ${this.price} And he buy the year ${this.publicYear}`
//     }
// }
//  class mukesh extends book {
//    mukesh1() {
//      return `Rahul Buy the book on the price ${this.price} And he buy the year ${this.publicYear}`;
//    }
//  }

//  let radhul22 = new book(2000, 2026);
//  let mukesh22 = new mukesh (100,2004);
//  console.log(radhul22.radhul());
//  console.log(mukesh22.mukesh1());
 
 

/// encaplication 

// class bank {
//     #balance = 123456789;
//     desposite (){
//           this.#balance = balance + amount;
//           return this.#balance;
//     }
//     getbalance() {
//          return `$ ${this.#balance}`
//     }
// }
// let amount = new bank ();
// console.log(amount.getbalance());



/// Abraction 

// class coffee {
//   process() {
//     // complex codeing
//     // doing great

//     return ` The best exercise on thee youtube `;
//   }

//   process1() {
//     // complex codeing
//     // doing great

//     return ` The best exercise on thee youtube `;
//   }
//   process2() {
//     // complex codeing
//     // doing great

//     return ` The best exercise on thee youtube `;
//   }
// final (){
//     let message1 = this.process();
//     let message2 = this.process1();
//     let message3 = this.process2();
//     return `${message1} ${message2} ${message3}`
// }
 
// }


// let sold = new coffee ();
// console.log(sold.final());




// Polymrphism 

// class bird {
//     fly (){
//         return`Flying....`;
//     }

// }
// class Pagwin extends bird {
//     fly (){
//         return `I can't flying...`
//     }
// }

// let Bird = new bird ();
// let pagwin = new Pagwin();


// console.log(pagwin.fly());
// console.log(Bird.fly());



// getter and setter 

// class empolyee {
//     constructor (name ,salary){
//         this.name = name;
//         this._salary = salary;
//     }
//     get salary(){
//         return `it can't see`
//     }
//     set salary (value){
//        if (value <0){
//        console.error("it is inavalid");
       
//        }
//        else{
//         this.salary = value;
//        }
//     }
// }
// let emp = new empolyee ("pawan" , 23340987);
// console.log(emp.salary);



//qestion 1
//Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

// Then create another constructor Dog that inherits from Animal using prototypes.

// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

// class Animal {
//     speak(){
//         return "Animal speaking";
//     }
// }
// class Dog extends Animal{
//     bark(){
//         return 'Woof!';
//     }
// }




// question 2

// Create a functional constructor Person that takes name and age as parameters. 
// Add a method greet() to the constructor that returns "Hello, my name is [name]".

// class Person {
//     constructor() {
//         constructor(this.name, age); {
//             if (age < 0) {
//                 console.error("invalid data");
//             }
//             else {


//                 this.name = name;
//                 this.age = age;

//             }
//         }
//         greet(); {
//             return `Hello, my name is ${name}`;
//         }
//     }
// }

// let person = new Person("jgf",23);
// console.log(person.ag);




// class Vehicle {
//     static isVehicle(obj){
//         return `true`;
//     }
//     else{
//         return `false`;
//     }
// }
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }hitachi
// getDetails(){
//     return` Make: ${make}, Model:${this.model}` 
// }
// }

// class Car  extends Vehicle{
//  startEngine(){
//     return "Engine started";
//  }
//  move(){
//     return "The car is driving"


//  }
// }


