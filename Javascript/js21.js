class Faculty{
    college="svce"
    constructor(fname,fage,fsalary,fgender){
        this.name=fname
        this.age=fage
        this.salary=fsalary
        this.gender=fgender
        console.log(
            "object values are set parent class"
        )
    }

    printDetails(){
        return `Faculty name is ${this.name}\nAge is ${this.age}\nSalary is ${this.salary}\nGender is ${this.gender}`
    }

    static add(a,b){
        return a+b
    }
}

class Hod extends Faculty{
    constructor(fname,fage,fsalary,fgender,fexperience,fbranch){
        super(fname,fage,fsalary,fgender)
        this.experience=fexperience
        this.branch=fbranch
        console.log(
            "object values are set for inherite class"
        )
    }

    printDetails(){
        return `Branch is ${this.branch}\nExperience is ${this.experience}\nFaculty name is ${this.name}\nAge is ${this.age}\nSalary is ${this.salary}\nGender is ${this.gender}`
    }

    static div(a,b){
        return a/b
    }
}


let obj1=new Faculty("Umesh",39,450000,"male")
console.log(obj1.college)
console.log(obj1.printDetails())


let obj2=new Hod("Ramesh",50,100000,"male",15,"CSE")
console.log(obj2.printDetails())
console.log(Faculty.add(10,20))
console.log(Hod.div(20,5))