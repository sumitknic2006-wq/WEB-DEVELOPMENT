/* OPERATOR*/


/* Arithmetic Operator */

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(2/5);
// console.log(5%2);

// // power
// console.log(5**3); //3 -> 5*5*5 = 125


/* Assignment Operator */

// let x = 20;
// let y = 10;
// x = x+y;

// or

// x+=y;

// x = x-y;

// or

// x-=y;

// x = x*y;
// x%=y;

// console.log(x);


/* Comparision Operator */

// let x = 20;
// let y = "20";

// console.log(x>y);
// console.log(x<y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x!=y);
// console.log(x==y);
// console.log(x===y);


// Convert one type to another type.

// let z = "120";
// let a = Number(z);

// console.log(a);

// let a = "121ac";
// let b = Number(a);

// console.log( b);
// console.log(typeof b);


// boolean -> number
// console.log(Number(true));
// console.log(Number(false));

// null -> 0
// console.log(Number(null));

// undefined -> number , undefined -> not a number(NaN).
// console.log(Number(undefined));

// Number -> String
// let a = 10;
// let b = String(a);

// console.log(typeof b);

// kis type ka data
// console.log(typeof String(undefined));

// // boolean -> string
// let a = true;
// console.log(String(a));

// // number -> boolean 
// console.log(Boolean(10));
// console.log(Boolean(0));


// string -> boolean
// console.log(Boolean("Hello"));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));


/* Compuer Science Challenge */

// let a = 0.1;
// let b = 0.2;
// let c = a+b;
// console.log(c);
// console.log(c == 0.3)

// // 0.1+0.2 == 0.3 -> pending
// let a = "0.1";
// let b = "0.2";

// let d = Number(a);
// let e = Number(b);

// let c = d+e;

// let f = String(c);
// console.log(f);
// console.log(f == 0.3)


// 1: null is loosely equal to undefined only.

// console.log(null==undefined);
// console.log(null===undefined);
// console.log(null==0);
// console.log(null=="");
// console.log(null==false);
// console.log(null==true);


// 2: >,<,>=,<= ---> (convert --> ( null --> number, undefined --> NaN))

// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);
// console.log(null>=undefined);
// console.log(0<=undefined);


// 3: two string ko compare each other --> asscii value se compare hota hai harek character.
// console.log("Sumit">"Rohit");  


// Ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se to dono number mein convert honge.
// console.log(10<="10");
// console.log(10<true);
// console.log(10>=true);

// console.log(null>="");
// console.log(null>"");


/* LOOP */


/* For Loop */

// for(let i = 0; i<10; i++){
//     console.log(i);
// }


/* While Loop */

// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// }


/* do - while loop  */

// let i = 0;

// do{
//     console.log(i);
//     i++;
// }while(i<10);


/* if else condition */

// let age = 25;

// if(age>=18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not eligible for vote");
// }


// kid or young aor old

// let age = 20;

// if(age<18){
//     console.log("Kid");
// }
// else if(age>=60){
//     console.log("old");
// }
// else{
//     console.log("young");
// }



/* Logical Operator -> && , || */


// &&
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(false&&true);


// ||
// console.log(true||true);
// console.log(true||false);
// console.log(false||false);
// console.log(false||true);


// logical &&(And)

// &&: If first value is false, it will return the first value itself
// If first value is true, it will return second.

// let a = "Rohit";
// let b = "Mohit";
// let c = a&&b;
// console.log(c);

// let a = 0;
// let b = 20;
// console.log(a&&b);


// logical || or

// ||: If first value is true, it will return the first value itself
// If first value is false, it will return second.

// let a = 10;
// let b = 20;
// console.log(a||b);


// !=
// console.log(5!=5);


// AND: & , or: | 
console.log(2&3);