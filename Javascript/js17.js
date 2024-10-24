// local storages

console.log(window.localStorage)
console.log(window.sessionStorage)


let myarr=['python','java']
// localStorage.setItem('skills',myarr)
localStorage.setItem('role','full stack developer')
localStorage.setItem('skills',JSON.stringify(myarr))
localStorage.setItem('phone','9878987898788')

console.log(localStorage.getItem('skills'))
console.log(localStorage.getItem('role'))

localStorage.removeItem('phone')

let returndata=localStorage.getItem('skills')
returndata=JSON.parse(returndata)
console.log(typeof(returndata))
console.log(returndata)

// localStorage.clear()

// sesssion storages

let myarr1=['python','java']
// localStorage.setItem('skills',myarr)
sessionStorage.setItem('role','full stack developer')
sessionStorage.setItem('skills',JSON.stringify(myarr1))
sessionStorage.setItem('phone','9878987898788')

console.log(sessionStorage.getItem('skills'))
console.log(sessionStorage.getItem('role'))

sessionStorage.removeItem('phone')

let returndata1=sessionStorage.getItem('skills')
returndata=JSON.parse(returndata1)
console.log(typeof(returndata1))
console.log(returndata1)
// sessionStorage.clear()