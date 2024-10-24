// Dom Selectors

// 1. SIngle Element Selector 

// 1.
let element= document.getElementById("name");
console.log(element)
console.log(element.className)
console.log(element.childNodes)


let el2=document.getElementById("child")
console.log(el2.childNodes)


element.innerHTML="<li>Welcome to guvi FSD course</li>"
element.style.color='Green'

let p=document.getElementById("para")
p.innerText='<h6>THis is para</h6>'

let todo=document.querySelector("#todo")
// let guvi=document.querySelector(".guvi")
console.log(todo)

todo.style.color='red'

// console.log(guvi)


// multi element


let elems=document.getElementsByClassName('child');
console.log(elems)
console.log(elems[0].childNodes)
console.log(elems[0].children)

// let d= document.querySelectorAll('h5.guvi');
// console.log(d)
// d[0].style.color='pink'
// d[1].style.color='yellow'
// d[3].style.color='blue'


let z= document.getElementsByTagName('div')
console.log(z)