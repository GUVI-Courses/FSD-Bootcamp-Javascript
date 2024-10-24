// async/await is syntactic sugar built on top of Promises, making asynchronous code look more like synchronous code. It uses the async keyword to declare an asynchronous function and the await keyword to wait for a Promise to resolve.

// async()

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data fetched")
//         },5000)
//     })
// }

// async function fetchDataAsync(){
//    try{
//     const data = await fetchData();
//     console.log(data)
//    } 
//    catch(error){
//     console.error(error)
//    }
// }

// fetchDataAsync()

async function fetchJsonApiUsers(){
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/posts/")
        if(!response.ok){
            throw new Error('APi is failed')
        }

        const userData=await response.json();
        console.log(userData)
    }

    catch(error){
        console.log("Fetch is failed",error)
    }
}
async function fetchJsonApiUserDetails(userId){
    try{
        const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        if(!response.ok){
            throw new Error('APi is failed')
        }

        const userData=await response.json();
        console.log(userData)
    }

    catch(error){
        console.log("Fetch is failed",error)
    }
}
// fetchJsonApiUsers()

fetchJsonApiUserDetails(20)

/*
fetchUserData is declared as an async function, allowing the use of await inside it.
The fetch function returns a Promise that resolves to the Response object representing the response to the request.
await pauses the execution of the fetchUserData function until the Promise returned by fetch is resolved.
If the response is not ok (status not in the range 200-299), an error is thrown.
The json() method of the Response object is used to parse the response body as JSON. It also returns a Promise, so await is used again.
If any error occurs during the fetch or JSON parsing, it is caught by the catch block
*/