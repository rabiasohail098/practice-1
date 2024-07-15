// step 00
let message1 = "Hello World";
let message:string = "Hello World"
console.log(message);
// 00a json object

let person = {
    "name":"Rabia",
    "age":35,
    "enroll":true,
    "address":{
        "city":"Karachi",
        "country":"Pakistan"
    },
    "hobbies":[
        "Reading",
        "Coding",
        "Outing",
        "Cooking"
    ]
}

console.log(person.hobbies);

// step 00b syntex 
// spelling mistake
// pnctuation mistake 
// statement mistake ho sakti hy
// braket mistake ho sakti hy

let myName:string = "Rabia Sohail"
let car = Toyota
let object = {
    name:"Rabia"
}

// step 00c type error
let myName:string = "Rabia Sohail"
function person(name:string,age:number) {
    return console.log(`Hello my name is ${name} and my age is ${age}`)
}
greet(123,"Rabia")
console.log(myName)
console.log(greet());


// Refrence error
console.loger(myName)

// step 00d assignability error
let age:number = 18;
age = "Parniya"

