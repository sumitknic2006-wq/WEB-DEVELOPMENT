const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming";
newElement.id = "second";


// select elemnt
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);


const newElement2 = document.createElement('h3');
newElement2.textContent = "Diwali aa rahi hai";
newElement2.id = "third";

// any class add
// newElement2.className = "diwali";
// newElement2.className += " Holi";

newElement2.classList.add("diwali");
newElement2.classList.add("holi");

// remove class
// newElement2.classList.add("holi");

// color
newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "30px";

// assign attribute
newElement2.setAttribute("hello","ji")

element.before(newElement2);
console.log(newElement2);

// any attribute need to information. , attribute:- class,style, id,....
console.log(newElement2.getAttribute("id"));
console.log(newElement2.getAttribute("class"));
console.log(newElement2.getAttribute("hello"));



// const list = document.createElement("li");
// list.textContent = "Milk";

// const list2 = document.createElement("li");
// list2.textContent = "Cake";

// const list3 = document.createElement("li");
// list3.textContent = "Halwa";

// const list4 = document.createElement("li");
// list4.textContent = "Paneer";

// const unorderElement = document.getElementById("list");

// // unorderElement.append(list, list2);
// // or
// unorderElement.append(list);
// unorderElement.append(list2);
// // unorderElement.append(list3);
// unorderElement.prepend(list3);

// // agar access hai to
// // list.after(list4);

// // agar access nahi hai to
// // console.log(unorderElement.children);
// unorderElement.children[1].after(list4);

//. or

const arr = ["Milk", "Halwa", "Paneer", "tofu", "Tea"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}

unorderElement.append(fragment);

const s1 = document.getElementById("first");
s1.remove();


const month = document.getElementById("ten");

// console.log(month.children);

const lister = document.createElement("li");
// lister.textContent = "Help";
lister.textContent = "<img src='https://www.google.com/search?sca_esv=197f520a64170af8&rlz=1C5CHFA_enIN1183IN1183&sxsrf=APpeQnvbg-oTHW9ImfsdRZrUfbba9a0jug:1783092693834&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832QGGMdFXpDyzkQgEdtB8w9zZ67Faapx8wIWp8O3JpX8ZaGK8XOQO1QpgtVZa1-fu0dLiphNCXRB4Ka9XWNF7mM-_FejuFzmj63qts6QhpB13348o4gby0TSk6eSS_5IM2dTNBxklQ2B_AcsJfk_cpHmcjX7_iUSAyhKLMjStJW-cYGYLMw&q=rohit+sharma&sa=X&ved=2ahUKEwj-7_f06baVAxXHVmwGHQThPAMQtKgLegQIHxAB&biw=960&bih=518&dpr=3#sv=CAMSURoyKhBlLXpheUhJWTNwZ1QxSFdNMg56YXlISVkzcGdUMUhXTToOS2FYdTBrVjl5ck5KdU0gBCoXCgFzEhBlLXpheUhJWTNwZ1QxSFdNGAEwARgHIP2B4q4FSggQARgBIAEoAQ'>"

// lister.innerHTML = "<img src='https://www.google.com/search?sca_esv=197f520a64170af8&rlz=1C5CHFA_enIN1183IN1183&sxsrf=APpeQnvbg-oTHW9ImfsdRZrUfbba9a0jug:1783092693834&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832QGGMdFXpDyzkQgEdtB8w9zZ67Faapx8wIWp8O3JpX8ZaGK8XOQO1QpgtVZa1-fu0dLiphNCXRB4Ka9XWNF7mM-_FejuFzmj63qts6QhpB13348o4gby0TSk6eSS_5IM2dTNBxklQ2B_AcsJfk_cpHmcjX7_iUSAyhKLMjStJW-cYGYLMw&q=rohit+sharma&sa=X&ved=2ahUKEwj-7_f06baVAxXHVmwGHQThPAMQtKgLegQIHxAB&biw=960&bih=518&dpr=3#sv=CAMSURoyKhBlLXpheUhJWTNwZ1QxSFdNMg56YXlISVkzcGdUMUhXTToOS2FYdTBrVjl5ck5KdU0gBCoXCgFzEhBlLXpheUhJWTNwZ1QxSFdNGAEwARgHIP2B4q4FSggQARgBIAEoAQ'>";

month.prepend(lister)
// month.insertAdjacentElement("afterbegin",lister);
// month.insertAdjacentElement("beforebegin",lister);
// month.insertAdjacentElement("beforeend",lister);
