console.log("functions")

// There are several ways to define functions in JavaScript:

// Function Declaration
// Function Expression
// Arrow Function
// Anonymous Function
// Immediately Invoked Function Expression (IIFE)

// function functionName(parameters) {
//     // function body
//     // code to be executed
//     return value; // optional
// }


// function greet(name){
//     console.log('Good Morning ',name)
// }

// greet('Rohan')
// greet('ARK')

// function greet(name){
//     console.log('Good Morning ',name)
//     console.log("You salary of RS 34567 is Credited to you account XXXX&8543")
//     return 34567
// }

// let data = greet('Rohan')
// console.log(data)

// function add(a,b,c,d){
//     res=a+b+c+d
//     return res
// }


// let o=add(10,20,30,40)
// console.log(o)

// // Arrow Functions 
// const functionName=(parameters) =>{
//     //block of code
//     return //optional
// }


// const greet =(name)=> `Hello Good morning ${name}`

// console.log(greet('Charlie'))

// // Anonymous FUnc

// setTimeout(function(){
//     console.log('I am a anonymous user')
// },5000)


// function greet(name = "Guest") {
//     return `Hello, ${name}!`;
// }

// console.log(greet()); // Outputs: Hello, Guest!
// console.log(greet("Dana")); // Outputs: Hello, Dana!


function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// Outputs:
// Outer Variable: outside
// Inner Variable: inside
