// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Comming";
// }



// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "Strike is Comming";
//     // element.style.backgroundColor="pink";
// }

// element.onclick = function handleClick(){
//     element.textContent = "I am the best";
// }


// element.addEventListener('click',()=>{
//     element.textContent = "Strike is Comming";
// });

// element.addEventListener('click',()=>{  // click ki jagah per mouseeneter , dbclick , ...
//     element.style.backgroundColor="brown";
// });


// let a = {
//     greet:function(value){
//         console.log("Hello",value);
//     }
// }

// a.greet(10);
// a.greet(20);


// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })


const parent = document.getElementById("parent");
// console.log(parent.children);

// parent.addEventListener('click',(e)=>{
//     // console.log(e.target)
//     e.target.textContent = "I am Clicked"
// })


// remove listener

function handleClick(e){
    e.target.textContent = "I am Clicked";
    parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick)


// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }



//  Bubbling

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target);
// //     console.log("GrandParent is clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     // console.log(e);
//     // console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     // console.log(e);
//     // e.stopPropagation();
//     // console.log("child is clicked");
// })

// capture phase on hai: Top se down aaoge: us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up(bubbleing phase bolte hai. tab triger kiya jayega);