// const btn=document.getElementById('mybtn')

// btn.addEventListener('click',function(){
//     console.log('btn is clicked')
//     alert('GUVI')
// })

// const hoverdiv=document.getElementById("hoverdiv")

// hoverdiv.addEventListener('mouseover',function(){
//     hoverdiv.style.backgroundColor='lightgreen'
// })

// hoverdiv.addEventListener('mouseleave',function(){
//     hoverdiv.style.backgroundColor='lightyellow'
// })
// hoverdiv.addEventListener('mouseout',function(){
//     hoverdiv.style.backgroundColor='lightpink'
// })


const rbtn=document.getElementById('mybtn');

function handleClick(){
    alert("Button was clicked")
}

rbtn.addEventListener('click',handleClick)

document.getElementById('removeBtn').addEventListener('click',function(){
    rbtn.removeEventListener('click',handleClick)
    alert('click event is removed')
})

// const inputField = document.getElementById('inputField');
// const output = document.getElementById('output');

//         inputField.addEventListener('keydown', function(event) {
//             output.textContent = `Key down: ${event.key}`;
//         });

//         inputField.addEventListener('keyup', function(event) {
//             output.textContent = `Key up: ${event.key}`;
//         });

// const dropdown = document.getElementById('dropdown');
// const output = document.getElementById('output');

// dropdown.addEventListener('change', function(event) {
//     output.textContent = `You selected: ${event.target.value}`;
// });

const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

inputField.addEventListener('focus', function() {
    output.textContent = 'Input field is focused';
});

inputField.addEventListener('blur', function() {
    output.textContent = 'Input field lost focus';
});