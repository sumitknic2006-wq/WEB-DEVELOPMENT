// Variable ko kaise banate hai.

/* let keyword */

// let name = "Sumit";
// let age = 19;

// if(true){
//     let c = 90;
// }

// age = 30;
// console.log(c);

// console.log(name , age);


/* const keyword */

// const account = 1234;
// // account = 23;

// console.log(account);


/* var keyword -> old way */

// var a = 10;
// var a = 20;
// if(true){
//     var a = 20;
// }
// console.log(a);


// // function scope
// function fun(){
//     var c = 20;
// }

// // global scope
// var b = 30;
// console.log(c);

/* Data Types */

/* Primitive data type:- number, string, boolean, undefine, null, bigint, symbol */

// number -> 8 byte -> 2^53-1 to -2^53 ka memory leta hai.  
// let a = 10;
// let b = 2.36;
// console.log(a,b);

// // kis type data hai
// console.log(typeof a);

// // string
// let c = "Strike is coming";
// let d = 'Anjali';
// console.log(c,d);
// console.log(typeof d);

// // boolean
// let login = true;
// let f = false;
// console.log(login, f);
// console.log(typeof f);

// // undefine
// let user;
// console.log(typeof user);
// // const p;
// console.log(user);

// // bigint
// let num = 237847587499373895n;
// console.log(typeof num);
// console.log(num);

// // null -> hum variable ko null value de dete hai.
// let weather = null;
// console.log(weather);
// console.log(typeof weather);

// let wheather = current_weather("Dwarka")
// 25
// null
// undefined

// // symbol
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id1);
// console.log(id1==id2);


/* Non Primitive data type:- array, object, function  */

// // array -> typeof object hai
// let arr = [10,20,11,"Sumit",true];
// console.log(arr);
// console.log(typeof arr);

/* Object */

// // Sumit 12312 18 gen

// let user = {
//     name:"Sumit",
//     account:12312,
//     age:18,
//     category:'gen'
// }
// console.log(typeof user);

/* function */

// // step-1
// function add(){
//     console.log("Hello");
// }

// add();

// // step-2
// let s = function add(){
//     console.log("Hello");
// }
// console.log(typeof s);
// // s();


/* Primitive data type is immutable */

let a = 10;
let b = a;

b = 20;
console.log(a,b);

// let str = "Sumit";
// str = "Rohit";

// console.log(str);


/* non-primitive data type mutable */

let arr = [10,20,30,40]
arr.push(90);
arr[0] = 70;
console.log(arr);

let obj = {
    name:"Mohan",
    age:20
}

let obj2 = obj;

obj2.name = "Rohan";
console.log(obj);
// console.log(obj.name);



