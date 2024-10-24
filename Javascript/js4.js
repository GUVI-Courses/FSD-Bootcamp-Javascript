console.log('js-4 data types')
// 1. Primitivate data types 
// number
let x=10;
let y=10.34
console.log(x, typeof(x))
console.log(y, typeof(y))

// string
var str='guvi fsd bootcamp'
var str2="guvi fsd bootcamp"
var str3=`guvi fsd bootcamp`
var str4=`"guvi fsd bootcamp"`
console.log(str,typeof(str))
console.log(str2,typeof(str2))
console.log(str3,typeof(str3))
console.log(str4,typeof(str4))

// boolean
// true/false 
var isActive=true;
var isPass=false
console.log(isActive,isPass,typeof(isActive))


// undefined
let z;
console.log(z, typeof(z))


//null
let b=null;
console.log(b,typeof(b))

// symbol
let sym=Symbol('my name is something')
console.log(sym,typeof(sym))


// BIgint
// Number - 2 power 53 -1
let bigInt=1233455555555555555555555555555555555544444n;
console.log(bigInt,typeof(bigInt))

// Object Types

// 1. Object 
// key:value 
let obj={
name:"alice",
age:25
}
console.log(obj)
console.log(typeof(obj))

// 2. arrays
let arr=[1,2,3,4,5,6,7,100]
console.log(arr, typeof(arr))
console.log(arr[5])

// function

function greet(name){
    console.log('Good morning',name)
}

greet('ark')
console.log(typeof(greet))


// Date
let now = new Date()
console.log(now,typeof(now))

// RegExp
let re=/ark-guvi+xyz/
console.log(re,typeof(re))


// MAP 

let map = new Map();
map.set('name','ark')
console.log(map, typeof(map))
console.log(map.keys())
// set

let set = new Set([1, 2, 3]);
console.log(set , typeof(set))

// special values

let inf=Infinity
console.log(inf, typeof(inf))

let minf=-Infinity
console.log(minf, typeof(minf))


// NaN

let notanumber=NaN;
console.log(notanumber, typeof(notanumber))