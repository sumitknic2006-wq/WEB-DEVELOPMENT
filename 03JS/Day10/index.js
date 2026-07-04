/* JavaScript me code run */

// Execution Context
// i) Memory allocation
// a = undefined
// b = undefined
// addNumber = functionCode
// sumResult1 = undefined
// sumResult2 = undefined

// ii) Execution phase


// // console.log(a);
// var a = 10;
// var b = 20;
// // console.log(a);

// // var sumResult1 = addNumber(a,b);
// // console.log(sumResult1);

// function addNumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);
// console.log(sumResult1,sumResult2);


/* let const */

// i) Memory allocation
// a = <uninitialised> (Temporal dead zone)
// b = <uninitialised> (Temporal dead zone)
// addNumber = <uninitialised> (Temporal dead zone)
// result = <uninitialised> (Temporal dead zone)

// ii) Execution phase
// a = 10
// b = 20
// addNumber = functionCode
// result = 30


// // console.log(a);
// let a = 10;
// const b = 20;
// // console.log(a);

// const result = addNumber(a,b);
// console.log(result);

// const addNumber = function(num1,num2){
//     const sum = num1+num2;
//     return sum;
// }

// // const result = addNumber(a,b);
// // console.log(result);
