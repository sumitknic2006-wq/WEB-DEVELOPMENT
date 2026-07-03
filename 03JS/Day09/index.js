/* FUNCTION */


// Step1: Create a function declaration:- These function are hoisted , meaning they are loaded into memory before any code executes.

// function greeting(){
//     console.log("Hello Coder Army, Strike is coming on 18 october");
//     return 20;
// }


// function addNumber(num1,num2,num3=0,num4=0){  // num1 , num2 -> parameter

//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// greeting();
// addNumber(3,4);   // 3 , 4 --> arguments
// // console.log(greeting());


/* rest operator:-  ...variable , ek array create karta hai. , jhan pta na rhe ki kitna mere pas arguments ya parameters aane wale hai to use in rest operator 
--> individual values ko catch karta hai. */

// function addNumber(...num){  // num1 , num2 -> parameter

//     let sum = 0;

//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }

// addNumber(6,7);   // 6 , 7 --> arguments
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(6,7,12,12,11,12,41,12);

// // console.log(greeting);
// // console.log(greeting());


// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10];

// const [first,second, ...num] = arr;
// console.log(first,second,num);

// const ans = [arr,arr2];
// const ans = [...arr,...arr2];
// console.log(ans);


//or -> ye bhi function declaration

// console.log(addNumber(3,4));

// function addNumber(num1,num2){
//     return num1+num2;
// }


// Step2: - Create a function expression:- These function are not hosted.

// const addNumber = function(num1,num2){
//     return num1+num2 ;   
// }

// console.log(addNumber(3,4));


/* arrow function:- ()=>{} --> that is keyword of arrow function */

// const text = ()=>{
//     console.log("Hello ji");
// }
// text();


// const addNumber = (num1 ,num2)=>{
//     return num1+num2;
// }

    // // or

// const addNumber = (num1,num2) => num1+num2;

// console.log(addNumber(2,3));


// square of num

// if we have single parameter, no need of this () 

// const squareNumber = num => num*num;

// console.log(squareNumber(5));


// const greeting = () => {
//     user =  {
//         name:"Sumit",
//         age:20,
//     }
//     return user;
// }


// const greeting = () => {
//     return {
//         name:"Sumit",
//         age:20,
//     }
// }


// const greeting = () => ({name:"Sumit",age:20});

// console.log(greeting());



/* IIFE(Immediately Invoked Function Expression):- 
Yeh function bante hi turant automatic execute (run) ho jata hai, 
ise alag se call nahi karna padta. */


// (function greeting(){
//     console.log("Hello ji");
// })();

// (() => {
//     console.log("hii");
// })();



// function greet(){
//     console.log("Hello ji, kaise ho")
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);


// blinkit

// function blinkitOrderPlaced(){
//     console.log("We have started packing your Order");
// }

// function zomatoOrderPlaced(){
//     console.log("We have started preparing your food");
// }

// function payment(amount,callback){
//     console.log(`${amount} payment has initialized`);
//     console.log("Pyment is received");
//     callback();

//     // GST: Government
//     // Rider ko Kitna payment dena 
//     // company ko kitna
// }

// payment(500,zomatoOrderPlaced);
// payment(300,blinkitOrderPlaced);
