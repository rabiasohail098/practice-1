// Explict casting

let age:unknown;
age = 18;
// number me tofixed method dy ker hum number k bad . k sath decimal ki quantity add karty hain
// type explict_casting
// is me hum bata datay hain k unknown type ki jaga ab type number consider ker lo or isay karne ka tariqa yea hy
age as number
// ab hum is me number k methods use kr sakty hain or use krne ka tariqay yea hongay
(age as number).toFixed(2) // method 1

let newAge = (age as number).toFixed(2); // method 2

(<number>age).toFixed(2) // method 3

console.log(newAge)

let color:unknown;
color = "Yellow"
// method 1
color as string
// method 2
let newColor = (color as string).indexOf
// method 3
(<string>color)

console.log(newColor);