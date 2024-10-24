let element=document.createElement('li')
console.log(element)
let text=document.createTextNode("guvi")
element.appendChild(text)
element.setAttribute("type","circle")

let desc=document.createElement('p')
desc.id="para"
desc.className="para"
let insertData=document.createTextNode("Guvi is the best training platform")
console.log(desc)
desc.appendChild(insertData)

let d=document.getElementById("data")
d.replaceWith(desc)
// d.removeAttribute("id")
d.setAttribute('style','color:blue;')
console.log(d)