/* OBJECT:- always to the key value pair me hoti hai. */


// CRUD Operation: Create read update delete.


// Create of object.
// const user = {
//     name: "Sumit",
//     age: 20,
//     emailId: "roysumitpatel@gmail.com",
//     amount: 5000,
//     "home address": "nawada"
// }

// // print 
// console.log(user);
// console.log(typeof user);


// // particular access of object
// console.log(user.age);
// console.log(user["home address"]);


// // insert element 
// user.aadhar = 1234;
// console.log(user);


// // update element
// user.amount = 6000;
// console.log(user);


// // delete element
// delete user.emailId;
// console.log(user);


// const user = {
//     name: "Sumit",
//     age: 20,
//     emailId: "roysumitpatel@gmail.com",
//     amount: 5000,
//     "home address": "nawada"
// }

// const user2 = user;
// user2.age = 90;

// console.log(user);


// /* Very Important */

// // print only keys
// console.log(Object.keys(user));

// // print only values
// console.log(Object.values(user));

// // print keys and values
// console.log(Object.entries(user));


/* for in loop */

// print keys
// for(let keys in user){
//     console.log(keys);
// }

// both keys and values 
// for(let keys in user){
//     console.log(keys , user[keys]);
// }


// const user = {
//     name: "Sumit",
//     age: 20,
//     emailId: "roysumitpatel@gmail.com",
//     amount: 5000,
//     "home address": "nawada"
// }


// Object ko destructure karna.
// const {name:userName,age:userAge,amount:userAmount} = user
// console.log(userName,userAge,userAmount);

// array ka destructure karna.
// const arr = [10,20,40,90,11];

// const [first,second] = arr;
// console.log(first,second);


/* for of loop array ke  */

// const user = {
//     name: "Sumit",
//     age: 20,
//     emailId: "roysumitpatel@gmail.com",
//     amount: 5000,
//     "home address": "nawada"
// }

// keys

// const temnparr = Object.keys(user);
// console.log(temnparr);
// for(let keys of temnparr){
//     console.log(keys);
// }

// values

// for(let values of Object.values(user)){
//     console.log(values);
// }


// entries:- ek array return karta hai.

// console.log(Object.entries(user));  // ek array ke ander multiple array

// for(let values of Object.entries(user)){ 
//     console.log(values);
// }


// print keys and values -> array ka destrucching

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }


// function in user

// const user = {
//     name: "Sumit",
//     age: 20,
//     emailId: "roysumitpatel@gmail.com",
//     amount: 5000,
//     "home address": "nawada",
//     greeting: function(){
//         console.log(`Strike is comming on 18 october ${this.name}`);
//         return 20;
//     }
// }

// const user2 = {
//     name: "Mohan",
//     account: 201,
//     greeting: function(){
//         console.log(`Strike is coming on 18 october ${this.name}`)
//         return 20;
//     }
// }

// user2.greeting = user.greeting;
// user2.greeting();
// const va = user.greeting();
// console.log(va);


/* Nested Object */

// const user = {
//     name: "Sumit",
//     age: 20,
//     emailId: "abc@gmail.com",
//     amount: 3400,
//     address: {
//         city: "nawada",
//         state: "Bihar"
//     }
// }

// console.log(user);
// console.log(user.address);
// console.log(user.address.city);

// create of independent copy , nested object me spread operator kam nhi karti hai.
// const user2 = {...user};
// user2.name = "Mohan";
// user2.address.city = "Dwarka";

// console.log(user2);
// // console.log(user);


// deep copy:- nested object ko bhi handle kar deta hai.

// const user2 = structuredClone(user);
// user2.address.city = "Dwarka";
// console.log(user);


// key ke form ko number bhi likh sakte hai.
// const user = {
//     name:"Sumit",
//     age:20,
//     0: 100,
//     2: "Mohan"
// }

// // array: store key value pair me.
// const arr = [10,20,30,40];

// {
//     0:10,
//     1:20,
//     2:30,
//     3:40,
// }

// console.log(user[2]);

// console.log(user[0]);
// console.log(user[2]);


// key: String || Symbol both will be store kar sakte hai.

// const sym = Symbol("id");

// const user = {
//     name:"Sumit",
//     age:20,
//     0:100,
//     2:"Mohan",
//     [sym]:"Hello ji"
// }

// console.log(user[sym]);