"use strict";
let fruits = ["Mango", "Apple", "Peach", "Orange", "Grapes"];
// Pop Method
let fruitsPop = fruits.pop();
console.log(fruitsPop);
// Push Method
let addFruits = fruits.push("Lichi");
console.log(addFruits);
console.log(fruits);
// Slice Method
let cutFruits = fruits.slice(0, 3);
console.log(cutFruits);
// Splice Method
let cutAddFruit = fruits.splice(3, 2, "Banana");
console.log(cutAddFruit);
console.log(fruits);
//Unshift Method
let addInStart = fruits.unshift("Strawberry");
console.log(addInStart);
console.log(fruits);
// Shift Method
let cutInStart = fruits.shift();
console.log(cutInStart);
// Indexof Method
let number = fruits.indexOf("Peach");
console.log(number);
// Filter Method
let color = ["RED", "BLUE", "GREEN", "Yellow", "Red", "Orange", "Green"];
let newcolor = color.filter((item, index) => color.indexOf(item) === index);
console.log(newcolor);
// Map Method
let New = color.map(item => item.slice(0, 1).toUpperCase() + item.slice(1, item.length).toLowerCase());
console.log(New);
// Sort Method
let myArray = [2, 9, 5, 8, 1, 7, 4, 6, 3, 0];
let result = myArray.sort();
console.log(result);
console.log(color.sort());
// Reverce Method
let newResult = result.reverse();
console.log(newResult);
// Reduce Method
let resultOfReduce = myArray.reduce((previous, curret) => previous + curret);
console.log(resultOfReduce);
// LastIndexOf Method
let last = fruits.lastIndexOf("Mango", -2);
console.log(last);
// Concat Method
let days = ["Monday", "Tuesday", "Wednesday"];
let remainingDays = ["Thursday", "Friday", "Saturday", "Sunday"];
let week = days.concat(remainingDays);
console.log(week);
// Join Method
let stars = week.join("🥰");
console.log(stars);
// ToString Method
let joint = myArray.toString();
console.log(joint);
// Every Method
function isOddNumber(item) {
    return item % 2 == 1;
}
let oddNumber = [3, 5, 7, 9, 13, 7, 15, 19];
let newResult2 = oddNumber.every(isOddNumber);
console.log(newResult2);
// Reduce Right Method
let ginti = [24, 20, 15, 9, 6, 4, 6, 9, 3];
let result2 = ginti.reduceRight((a, b) => a / b);
console.log(result2);
// Some Method
let comparision = ginti.some(item => item % 2 === 0);
console.log(comparision);
// Fill Method
let colors = ["Red", "Blue", "Green", "Yellow"];
let replacing = colors.fill("Pink", 2);
console.log(replacing);
