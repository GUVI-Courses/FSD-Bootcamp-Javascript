let textBtn=document.getElementById('textBtn');
let textCard=document.getElementById('textCard');
let jsonBtn=document.getElementById('jsonBtn');
let jsonCard=document.getElementById('jsonCard');
let apiBtn=document.getElementById('apiBtn');
let apiCard=document.getElementById('apiCard');



// data text
textBtn.addEventListener('click',()=>{
    // create a ajax request

   let url='./data/data.txt';
   fetch(url).then(data=>{
    if(data.ok){
        return data.text()
    }
    else{
        throw new Error('failed')
    }
   }).then((text)=>{
            let data=text
            textCard.innerHTML=data;
   })

})

// json 



jsonBtn.addEventListener('click',()=>{
    // create a ajax request

   let url='./data/data.json';
   fetch(url).then(data=>{
    if(data.ok){
        return data.text()
    }
    else{
        throw new Error('failed')
    }
   }).then((text)=>{
            let data=text
            jsonCard.innerHTML=data;
   })

})




apiBtn.addEventListener('click',()=>{
    // create a ajax request

    let url ='https://api.githusb.com/users/njbj';
   fetch(url).then(data=>{
    if(data.ok){
        return data.text()
    }
    else{
        throw new Error('failed')
    }
   }).then((text)=>{
            let data=text
            apiCard.innerHTML=data;
   }).catch((error)=>{
     let er=error
     apiCard.innerHTML=er
   })

})