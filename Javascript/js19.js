console.log("OOPS")

// object literals

// let employee={
//     name:"Ark",
//     age:28,
//     func:function(){
//         console.log(`The name is ${this.name} age is ${this.age}`)
//     }
// }

// console.log(employee)
// employee.func()

// // construtor
// function Employee(ename,esalary,edesignation,eage){
//     this.ename=ename
//     this.esalary=esalary
//     this.edesignation=edesignation;
//     this.eage=eage
//     this.details=function(){
//         return `The Employee name is ${this.ename} age is ${this.eage} salary is ${this.esalary} role is ${this.edesignation}`
//     }
//     console.log("object is created")
// }

// let e1= new Employee("Rohan",50000,"Javascript dev",24)
// let e2= new Employee("Naz",60000,"Python dev",24)

// console.log(e1.details())
// console.log(e2.details())
// console.log(e1)


function employe(name,age){
    this.name=name;
    this.age=age;
}

employe.prototype.getName=function(){
    return this.name
}

employe.prototype.setName=function(newName){
    this.name=newName
}

employe.prototype.getAge=function(){
    return this.age
}

employe.prototype.setAge=function(newAge){
    this.age=newAge
}

let obj1=new employe("aadithyya",23)
console.log(obj1)
console.log(obj1.getAge())
obj1.setName("amrutha")
console.log(obj1.getName())


