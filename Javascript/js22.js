// Asynchronous
// Asynchronous programming in JavaScript allows for non-blocking operations, enabling a smoother and more efficient execution of code, especially for tasks like network requests, file reading, and timers. There are several ways to handle asynchronous operations in JavaScript, including 
// callbacks
// Promises
// async/await

// setTimeout(()=>{
//     for(let i=0;i<10;i++){
//         console.log(i)
//     }
//     sum(10,20)
// },4000)

// function greet(){
//     console.log("Good Morning guvi")
// }

// function sum(a,b){
//     console.log("sum of two number is ",a+b)
// }

// greet()

// Callbacks are functions passed as arguments to other functions, which are invoked once the asynchronous operation is complete.


// function greet(str){
//     setTimeout(()=>{
//         console.log("Good Morning",str)
//     },5000)
// }


// function Table(num,callback){
//     setTimeout(()=>{
//         for(let i=1;i<=10;i++){
//             document.write(`\n ${num} X ${i} = ${num*i} \n`)
//         }

//         callback("GUVI")
//     },2000)
// }

// Table(10,greet)


// function fetchData(callback){
//     setTimeout(()=>{
//         callback("Data is fetched...")
//     },2000)
// }

// fetchData((data)=>{
//     console.log(data)
// })

const friends=[{
    name:"Naz",
    age:24
},
{
    name:"Aadi",
    age:25
}

]

function addFriends(friend,callback){
    setTimeout(()=>{
        friends.push(friend);
        console.log("Friends Added")
        callback();
        console.log("Done")
    },1000)
}

function getFriends(){
    setTimeout(()=>{
        let str="";
        friends.forEach(function(friend){
            str+=`<li>${friend.name}</li>`
        });
        document.getElementById('friends').innerHTML=str;
        console.log("friends added")
    },3000)
}

let newFriend={
    name:"Meghana",
    age:25
}

addFriends(newFriend,getFriends)