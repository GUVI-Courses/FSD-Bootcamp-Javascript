// const proto={
//     greeting:function(){
//         return `Good Morning`
//     },
//     changeGreeting:function(greet){
//         this.greet=greet
//     }
// }
// console.log(proto)


// let d1=Object.create(proto);
// d1.name="ark";
// d1.age=28;


// console.log(d1)
// console.log(d1.greeting())
// d1.changeGreeting("Good Night")
// console.log(d1.greeting())

// const proto={
//     greeting:function(){
//         return `Good Morning`
//     },
//     changeName:function(name){
//         this.name=name
//     }
// }
// const obj=Object.create(proto,{
//     name:{value:"guvi", writable:true},
//     since:{value:2014}
// })

// obj.changeName("Guvi Limited")
// console.log(obj)

// console.log(obj.greeting())


function Employeee(name,salary,age){
    this.name=name
    this.salary=salary
    this.age=age
    console.log("constructor employee")
}

Employeee.prototype.greeting=function() {return `Good Morning ${this.name}`}
Employeee.prototype.businesss=function() {return `Guvi ${this.name}`}

// let obj1=new Employeee("Rahul",254000,25)
// console.log(obj1)
// console.log(obj1.greeting())

function Programmer(name,salary,age,language){
    Employeee.call(this,name,salary,age)
    this.language=language
    console.log("contructor programmer")
}

Programmer.prototype=Object.create(Employeee.prototype)


let p1=new Programmer("anonyomous user",50000,24,"Javascript")
console.log(p1)