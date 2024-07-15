//Object Types
//Type Aliases
type Teacher = {
    name:string,
    age:number,
    status:string,
    contactNo:number,
}
let teacher:Teacher = {
    name:"Rabia",
    age:35,
    status:"Married",
    contactNo:+923170809389
}
//Type vs. Interfaces

type Student = {
    name:string,
    
}
//Type Compatibility
// Object literals yea object banane ka asan or seedha taraika hy jis me properties ki keys or value hoti hain
let car = {
    name:"Toyota",
    model:"Carolla",
    year:2018
}

//Freshness
// Fresh object
let person = {
    name:"Rabia",
    age:34,
    enroll:true
}

// steal object
let person1 = {
    name:"Rabia",
    age:34,
    enroll:true
}

person1.age = 35 // age modify hogai is liya ap yea object steal ban gaya


//Structural Typing & Duck Typing in TypeScript

interface Deal1 {
    food:string
}

interface Deal2 {
    food:string,
    drink:string
}

let myOrder:Deal1 = {
    food:"Biryani"
}

let yourOrder:Deal2 = {
    food:"Karhai",
    drink:"Fanta"
}

let yashalOrder:Deal1 = yourOrder // it has extra property but it doesn't show error thats means its allow to extra property

let kiswahOrder:Deal2 = myOrder // it has missing a drink property thats why its show error
// this is called structural typing

// Duck typing

interface Animal {
    name:string
    sound: ()=>void
}

let cat = {
    name:"Snow White",
    sound: ()=>{console.log("Meow")}
}

let dog = {
    name:"Tommy",
    sound:()=>{console.log("Bark")}
}

function animalSound(animal:Animal) {
    animal.sound
}

animalSound(cat)
animalSound(dog)

// yahan mane dog or cat ko animal interface nahi diya laken kun k dono object ki 
//properties animal interface se match the is liya typescript ne khud he isay animal
// interface jaisa asume ker liya isay hum duck typing kehty hain
//Duck typing me structure ko dekh ker dono ko equal consider kiya jata hy

//Nominal type

type Point = {
    x : number,
    y : number,
    _type: "Point"
}

type Coordinate = {
    x : number,
    y : number,
    _type : "Coordinate"
}

let point:Point = {
    x : 34,
    y : 35,
    _type : "Point"
}

let coordinate:Coordinate = {
    x : 67,
    y : 56,
    _type : "Coordinate"
}

point = coordinate 


//Future TypeScript version may support Nominal Types


// yahan typescript ko yea samjhane k liya k point or coordinate dono alag alag type 
//hain _type use kiya gaya hy warna typescript structure same hone ki wajah se isay 
//equal consider ker leta dono ki structure same ho lakin name same na hon is wajah 
//se error show ho jay is tarah ki typing ko hum nominal type kehty hain



//Declare and Type a nested Object in TypeScript
//Nested object 

interface Person {
    name:string,
    age:number,
    address:{
        city:string,
        country:string
    }
}

let human:Person = {
    name:"Rabia",
    age:35,
    address:{
        city:"Karachi",
        country:"Pakistan"
    }
}
//What are intersection types in Typescript
// type intersect me hum ek sath multiple types ko use ker sakty hain
let mySelf:Student & Teacher = {
    name:"Rabia",
    age:35,
    status:"Married",
    contactNo:+923170809389
}


//Any Type

let fruit:any = "Mango"
fruit = 35
fruit.fixed()
fruit = true
fruit = undefined
// any data type ko use ker k hum variable me kuch bi store ker sakty hain yea hamen error nahi dega any data type 
//type checking ko band ker deta hy


//What is the “unknown” Type in TypeScript?

let thing:unknown;
thing = "Ball" // sirf is line me thing ki data type string hogi
thing = 34 // is line me thing ki data type number hogi laken is ki real data type unknown he rahay gi is ko hum 
//narrowing kehty hain

// unknown type me bhi hum kuch bhi store ker sakty hain but yea data type ki cheacking bhi karta hy