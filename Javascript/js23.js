// resolve-> fullfill  rejected->not got fullfill 
// Promises represent a value that may be available now, or in the future, or never. They provide then and catch methods to handle success and error cases.


function greeting(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if(!error){
                console.log("Your Promise is Been Resolved");
                resolve("Guvi");
            }
            else{
                console.log("Your Promise is Been Rejected")
                reject("error occurred due to failed network")
            }
        },3000)
    })
}

greeting().then(function(data){
    console.log("Thanks for resolving",data)
}).catch(function(error){
    console.log(error)
})



// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data fetched!");
//       }, 1000);
//     });
//   }
  
// fetchData()
//     .then((data) => {
//       console.log(data); // Output after 1 second: Data fetched!
//     })
//     .catch((error) => {
//       console.error(error);
    // });
  