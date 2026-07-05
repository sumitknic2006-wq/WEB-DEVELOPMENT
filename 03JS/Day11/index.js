/* Scope and Closure High order function (HOF):-
There are three type of scope:- i) Global Scope:- Accessible to everyone 

ii) Functional Scope:- accesible only to that function 

iii) Block Level Scope:- accesible only to that block

=> var :- global , functional ko respect deta hai but block level ko respect nahi karta hai. 

*/


// // Global scope

// const globalGreeting = "Hello World"; 

// function sayHello() {
//     console.log(globalGreeting); // Works! Accessible inside functions
// }

// sayHello();


// // functional scope

// function processPayment() {
//     var status = "Completed"; // Function scoped
//     console.log(status); // Works!
// }

// console.log(status); // Throws ReferenceError (Invisible outside)


// // Block Scope

// if (true) {
//     // let blockScoped = "Hidden";
//     var functionScoped = "Leaked"; 
// }

// console.log(functionScoped); // Logs: "Leaked" (var bypassed the block!)
// // console.log(blockScoped);    // Throws ReferenceError (let stayed trapped)



// let a = 10;
// const b = 20;

// if(true){
//     // let d = 30;
//     console.log(a);
// }

// console.log(b);
// // console.log(d);

// function greet(){
//     let c = 30;
//     var e = 90;
// }

// // console.log(c);
// console.log(e);
// greet();



// // check for the scope

// let global = 30;

// function greet(){

//     let global = 40;

//     function meet(){
//         let global = 10;
//         console.log(global);
//     }

//     meet();
// }

// greet()



// function to reference ke through execute
// function createCounter(){

//     function increment(){
//         console.log("I am increnment function");
//     }
//     return increment;
// }

// const count = createCounter();
// console.log(count);
// count();



// function createCounter(){

//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// // console.log(counter);
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());




// balance += "Rohit";
// balance -= 500;
// console.log(balance);


// let balance = 500;
// // private

// let user = {
//     balance: 500,
//     deposit: function(amount){
//         if(typeof amount === "number" && amount>0){
//         // console.log(this);
//         balance+=amount;
//         return this.balance;
//         }
//     },
    
//     withdraw: function(amount){
//         if(typeof amount === "number" && amount>0 && balance>=amount){
//         balance+=amount;
//         return balance;
//         }
//     },

//     getBalance: function(amount){
//         return balance;
        
//     }
// }


// balance = "Sumit";

// user.balance="Sumit";
// console.log(user.getBalance());
// console.log(user.deposit(200));
// console.log(user.deposit("ass200"));

// method ko access(function)
// balance: usko directly access nahi.



// function createBankAccount(){

//     let balance = 500;


//     const user = {
//         deposit: function(amount){
//             if(typeof amount === "number" && amount>0){
//             // console.log(this);
//             balance+=amount;
//             return balance;
//             }
//         },
    
//         withdraw: function(amount){
//             if(typeof amount === "number" && amount>0 && balance>=amount){
//             balance-=amount;
//             return balance;
//             }
//         },
//         getBalance: function(){
//             return balance;
            
//         }
//     }

// return user;

// }


// const customer = createBankAccount();
// // console.log(customer);
// // console.log(customer.deposit(200));
// // console.log(customer.getBalance());
// console.log(customer.withdraw(200));



/* Higher order function:- ek function ke ander as a argument dusre function ko de rha hua. */

// function double(){

//     function execute(){
//         console.log("Hello");
//     }
//     return execute;
// }

// const n= double();
// n();



// function double(value){

//     return function execute(num){
//         return num*value;
//     }
// }

// // const n= double(20);
// // console.log(n(5));

// // or

// const n = double(20)(5);
// console.log(n);



