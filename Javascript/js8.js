// object literals

let person ={
    name:"Alice",
    age:25,
    greet:function(){
        console.log('good afternoon')
    },
    skills:['python','java']
}
console.log(person)
person.greet()
console.log(person.age)
console.log(person.skills)

// Using constructor

let p2 = new Object()
p2.name='rose',
p2.age=35,
p2.greet=function(){
    console.log('good night')
}
p2.skills=['java','javascript']

console.log(p2)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))


let target={a:1};
let source={b:2,c:3}
Object.assign(target,source)
console.log(target)

console.log(Object.is('foo', 'foo')); // true
console.log(Object.is({}, {})); // false

let newProto = { greet1() { console.log('Hi!'); } };
Object.setPrototypeOf(person, newProto);
person.greet1(); // 'Hi!'



Object.defineProperties(person, {
    name: {
      value: 'Alice',
      writable: false,
      enumerable:false,
      configurable:false
    },
    age: {
      value: 25,
      writable: true
    }
  });
  


let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
// { value: 'Alice', writable: false, enumerable: true, configurable: true }


let sealedObject = Object.seal({ a: 1 });
sealedObject.b = 2; // does nothing
sealedObject.a = 2; // works

console.log(sealedObject)


let frozenObject = Object.freeze({ a: 1 });
frozenObject.a = 2; // does nothing in strict mode, throws an error
console.log(frozenObject)


