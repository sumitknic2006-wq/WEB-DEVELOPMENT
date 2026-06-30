/* ============= ARRAY ============= */


// Create of array

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;
// let marks5 = 90;

// or

// let marks = [100,50,70,80,90];

// console.log(marks);
// console.log(marks.length);


// // ek variable to multiple types

// let arr = [100,30,"Sumit",true];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(typeof arr);

// arr[1] = 90;
// console.log(arr);


// /* push operation: Insert element at end*/

// arr.push(80);
// arr.push("Strike");

// console.log(arr);


// /* pop operation: Delete element from end */

// arr.pop();
// console.log(arr);


// /* Starting add kar sakta hu, delete the element at first place. */

// // add first place
// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// // delete first place
// arr.shift();
// console.log(arr);



// let arr = [10,30,50,90,11];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// for of loop 
// for(let num of arr){
//     console.log(num);
// }


// let arr = [10,30,50,90,11];
// let arr2 = arr;

// arr2.push(30);  // non primitive -> copy by reference ko point karta hai.

// console.log(arr);
// console.log(arr2);


/* object(Non primitive): Copy by reference hote hai.
Primitive: Copy by value
*/
// const: Isme address change nahi ho sakta jo ek bar address aa gya wahi hoga.

// const arr = [10,30,50,90,11];  // const: agar ek array create hai agar usme ek nya dalna chahte hai to ye possible nahi hai, but us array me update kar sakte hai.
// // arr = [80,90,11];
// arr[2] = 30;

// console.log(arr)



// slice: original array me kuch change nahi hota hai.

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);
// console.log(arr);
// console.log(arr2);


// splice: original array se element treamout(bahar) ho jate hai. , matlab original array me change hota hai.

// const arr = [10,30,50,90,11];
// // console.log(arr.splice(1,3));
// const arr3 = arr.splice(1,3,"Sumit",19);
// // console.log(arr);
// console.log(arr3);



/* (concatinat)concat: two array ko add karna */

// const arr = [10,30,50,90,11];
// const arr2 = ["Sumit",11,true];
// const arr4 = [90,4,false];

// // arr.push(arr2);
// const arr3 = arr.concat(arr2,arr4);
// // const arr3 = [arr,arr2,arr4];
// console.log(arr3);


/* Spread Operator -> (...variable1, ...variable2, .....): individual item ko bahar nikalta hai. */

// const arr = [10,30,50,90,11];
// const arr2 = ["Sumit",11,true];
// const arr4 = [90,4,false];

// const arr3 = [...arr,...arr2,...arr4];
// console.log(arr3);


/* Convert array to string */

// const names = ["Alice", "Bob", "Charlie"];

// console.log(names.toString());

// // Join: apne hisab se join karta hai space,undercost, coma, -,  and ....etc.
// console.log(names.join(" "));
// console.log(names.join("_"));
// console.log(names.join(","));


// array -> element -> index , lastindex  , persent hai.

// const names = ["Alice", "Bob", "Charlie", "Bob"];

// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bob"));
// console.log(names.includes("Bobs"));


/* Sorting: character ke basis per sort hota hai. , asscii table ke anushar capital letter pahele ayega uske bad small letter , ye character by character comparision karta hai. */

// const names = ["sun", "Sumit", "Mohit", "Alice", "Rohit" , "Charlie" ];

// names.sort();
// // names.reverse();

// console.log(names);


// number
// // const a = [101,90,80,32,91];
// const arr = [10,"Rohit","Sumit","Mohan",true];

// arr.sort();
// console.log(arr);


// sorting for -> function ke through

// const arr = [10,40,31,71,5,11]

// // ascending order
// arr.sort((a,b)=> a-b);

// // descending order
// arr.sort((a,b)=> b-a);

// // 100,20,30
// // a = 10
// // b = 31

// // -ve , zero : pehle a aayega fir b aayega
// //  +ve : b aayega fir a aayega

// console.log(arr);


/* Flating Arrays */

// const arr = [10,30,50,[40,90,[60,19,99],11],80];

// console.log(arr[2]);
// console.log(arr[3]);
// // console.log(arr[3][0]);
// // console.log(arr[3][2]);
// console.log(arr[3][2][1]);

// // flat: ek bar me ek hi bar flat karta hai. , iska malab ek bar me ek bracket ko hatta hai.

// const a = arr.flat();
// // const a = arr.flat(2);
// // const a = arr.flat(Infinity);
// console.log(a);


// const a = [10,309,"Sumit",9.3,true];
// console.log(a["1"]);
// // a.name = "Rohit";
// // console.log(a);