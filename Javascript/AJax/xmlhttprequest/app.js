let textBtn=document.getElementById('textBtn');
let textCard=document.getElementById('textCard');
let jsonBtn=document.getElementById('jsonBtn');
let jsonCard=document.getElementById('jsonCard');
let apiBtn=document.getElementById('apiBtn');
let apiCard=document.getElementById('apiCard');



// data text
textBtn.addEventListener('click',()=>{
    // create a ajax request

    let xhr=new XMLHttpRequest();

    // prepare the request
    //  method-get,post, put,delete,head 

    let method="GET";
    let url ='./data/data.txt';
    xhr.open(method,url)

    // send the request
    xhr.send()

    xhr.onload=()=>{
        if(xhr.status===200){
            console.log(xhr.responseText)
            let data= xhr.responseText
            textCard.innerHTML=data;
        }
    }


})

// json 
jsonBtn.addEventListener('click',()=>{
    // create a ajax request

    let xhr=new XMLHttpRequest();

    // prepare the request
    //  method-get,post, put,delete,head 

    let method="GET";
    let url ='./data/data.json';
    xhr.open(method,url)

    // send the request
    xhr.send()

    xhr.onload=()=>{
        if(xhr.status===200){
            console.log(xhr.responseText)
            let data=xhr.responseText
            jsonCard.innerHTML=data;
        }
    }


})

// api 
apiBtn.addEventListener('click',()=>{
    // create a ajax request

    let xhr=new XMLHttpRequest();

    // prepare the request
    //  method-get,post, put,delete,head 

    let method="GET";
    let url ='https://api.github.com/users';
    xhr.open(method,url)

    // send the request
    xhr.send()

    xhr.onload=()=>{
        if(xhr.status===200){
            console.log(xhr.responseText)
            let data=xhr.responseText
            apiCard.innerHTML=data;
        }
    }


})