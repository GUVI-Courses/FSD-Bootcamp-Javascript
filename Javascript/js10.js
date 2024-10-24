// The forEach method in JavaScript is used to execute a provided function once for each array element. It is a higher-order function and part of the array prototype, allowing you to perform actions directly on array elements without the need for explicit indexing.

// array.forEach(function(currentValue, index, array) {
//     // code block to be executed
// });

// using function

// const array=[4,5,6,9,2,1]
// array.forEach(function(element,index,array){
//     console.log(element,index,array)
// })

// using arrow function

// const array=[4,5,6,9,2,1]
// array.forEach(element=>console.log(element))

// const array=[1,2,3,4,5];
// const newArray=[];

// array.forEach((element)=>{
//     newArray.push(element*2)
// })

// console.log("old array",array)
// console.log("new array",newArray)


// const obj={
//     multipllier:2
// }

// const array=[1,2,3,4,5];
// array.forEach(function(element){
//     console.log(element*this.multipllier)
// },obj)

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        break; // This will exit the loop when array[i] is 3
    }
    console.log(array[i]);
}
