// var
// var is function-scoped and has been part of JavaScript since the beginning. It is hoisted to the top of its scope and can lead to unexpected behavior.
var x=10;
function varExample(){ 
    console.log(x)
}
// console.log(x)


function letexample(){
    let x=30;
    x=40
    let y=32;
    console.log(x)

}
// varExample()
letexample()
// console.log(y)

function constExample(){
    const z=10;
    console.log(z)

    const obj={name:"ark"}
    console.log(obj)
    obj.name='yyy'
    console.log(obj)

    // const a=10
    // a=20
    // console.log(a)
}

constExample()




// Best Use Cases
// var:

// Use var for legacy code where refactoring to let and const might not be feasible.

// let:

// Use let for variables that need to be reassigned.



// Prefer let in most scenarios where the variable's value will change.


// const:

// Use const for constants or variables that should not be reassigned.
// Prefer const for arrays and objects to prevent reassignment while still allowing modification of the contents.

function example() {
    var a = 1; // Function-scoped
    let b = 2; // Block-scoped
    const c = 3; // Block-scoped, constant value
  
    if (true) {
      var a = 4; // Same variable as above
      let b = 5; // Different variable, block-scoped
      const c = 6; // Different variable, block-scoped
      console.log(a); // 4
      console.log(b); // 5
      console.log(c); // 6
    }
  
    console.log(a); // 4 (var is function-scoped)
    console.log(b); // 2 (let is block-scoped)
    console.log(c); // 3 (const is block-scoped)
  }
  
  example();
  