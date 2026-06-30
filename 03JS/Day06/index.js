/* STRING */


// const str1 = "Sumit";
// const str2 = 'Sumit';
// const str3 = `Strike is coming soon`;
// const str4 = `Strike 
// is coming 
// a soon`;

// console.log(str1,str2,str3,str4);


//  variable ke ander variable

// const day = 18;
// const str = `Strike is coming on ${day}`;
// console.log(str);


// Length
// const str = `Hello Coder Army`;

// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);

// str[2] = "S";
// console.log(str);


// Convert to uppercase
// const str = `Hello Coder Army`;

// const a = str.toUpperCase();
// console.log(a);
// // or
// console.log(str.toUpperCase());


// Convert to lowercase
// const str = `Hello Coder Army`;
// const a = str.toLowerCase();
// console.log(a);
// // or
// console.log(str.toLowerCase());


// String me substring 

// const str = `Hello Coder Army Coder`;

// console.log(str.indexOf('Cod'));
// console.log(str.lastIndexOf('Cod'));  // last wala substing ka index deta hai
// console.log(str.includes('Cod'));  // es string me wo substring hai ya nahi.


// slice :- last index not included.

// const str = `Hello Coder Army Coder`;
// console.log(str.slice(2,5));  // start -> 2 , end -> 5 , print:- llo -> index: 2 to 4.
// console.log(str.slice(3));  // start index 3 to last ta print
// console.log(str.slice(-4));  // start for last -3 to -1 tak print or last ke 4 element print
// console.log(str.slice(-5,-2))  // -2 will be not included.

// suubstring
// const str = `Hello Coder Army Coder`;
// console.log(str.substring(2,5));

// add two string
// const a = "Sumit";
// const b = "Kumar";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Sumit");
// console.log(24+"Sumit"+30);
// console.log(30+24+"Sumit");


// replace
// const str = `Hello Coder Army Coder`;
// console.log(str.replace("ode","idm"));
// console.log(str.replaceAll("ode",'iam'));  // string me jitna ode ko replace ker dega jab all dete hai to.


// .trim()
// const user = "  Sumit  ";
// console.log(user);
// console.log(user.trim());


// split: 

// const names = "Sumit Rohit Mohit Suraj Anjali";
// const names = "Sumit Rohit, Mohit, Suraj, Anjali";
// console.log(names.split(" ")); // space ke basis per split karna hai.
// console.log(names.split(",")); // , ke basis per split karna hai.



/* DATE */

// const now = new Date();

// // utc time
// console.log(now);

// // persent time , apna time
// console.log(now.toString());  // toString persent time and date nikalker deta hai.
// console.log(now.toISOString());
// console.log(now.toLocaleString());

//  aaj konsa day :- days: Mon,tue,..(1 based), Month: 0, 1,.. 

// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());  // month zero base index se stat hote hai. 0->january , 1->ferbury, ...etc.
// console.log(now.getMinutes());
// console.log(now.getHours());
// console.log(now.getSeconds());


/* Mention : - Formate:- year date hour minute second millisecond */
// const now = new Date(2025,8,20,8,25,16,125);

// console.log(now);

// console.log(now.toString());


// TimeStamp:- millisecond se date nikal
// const now = Date.now();
// console.log(now);           // 1782471702694:- TimeStamp

// const dates = new Date(1782471702694);
// // const dates = new Date(now);
// console.log(dates);
// console.log(dates.toString());

// const now = Date.now();
// const dates = new Date(now);
// console.log(now);


// const now = Date.now();
// const dates = new Date(-12312312);

// console.log(dates);