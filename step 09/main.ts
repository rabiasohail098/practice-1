//functions
// parameters
// type of parameters

function add(num1:number,...nums:number[]) {
    return  nums.reduce(((acc,curr)=>acc+curr + num1))
    }


console.log(add(4,9,2,5,6,7,8,9,7));

function add1(num1:number,...nums:number[]) {
    return  nums.map(((acc)=>acc* num1))
    }

console.log(add1(6,9,2,6,9,2,4));


let fruits = ["apple","mango","pear"]
fruits.map((item=>
    {console.log(item);
}))

console.log(fruits);

// // callback hell
// function fetchApi(url:string){

//     return new Promise<void>((resolve, reject) => {
//     const delay = Math.random()*5000
//     setTimeout(() => {
//         if (delay>4000){
//             reject ("error");
//         }else{
//             (url)
//         }
//     }, delay);
//     })
// }

// fetchApi("book.com/page 1").then((x)=>{
//     console.log("it is resolved :" , x);
//     return  fetchApi("books.com/page 2")})
//     fetchApi("book.com/page 3").then((x)=>{
//         console.log("it is resolved :" , x);
//         return  fetchApi("books.com/page ")})
//         fetchApi("book.com/page 5").then((x)=>{
//             console.log("it is resolved :" , x);
//             return  fetchApi("books.com/page 6")})
//             fetchApi("book.com/page 7").then((x)=>{
//                 console.log("it is resolved :" , x);
//                 return  fetchApi("books.com/page 8")})
//                 fetchApi("book.com/page 9").then((x)=>{
//                     console.log("it is resolved :" , x);
//                     return  fetchApi("books.com/page 10")})
//                     fetchApi("book.com/page 11").then((x)=>{
//                         console.log("it is resolved :" , x);
//                         return  fetchApi("books.com/page 12")})
//                         fetchApi("books.com/Page 13").catch((err)=>{
//                             console.log("your network is not stabble");
                            
//                         })

//                         class TimePrinter {
//                             static printCurrentTime() {
//                                 const now = new Date();
//                                 console.log(now.toLocaleTimeString());
//                             }
//                         }
//                         // setInterval(TimePrinter.printCurrentTime,1000)
                
                        function printNumbersWithDelay() {
                            for (let i = 1; i <= 5; i++) {
                                setTimeout(() => {
                                    console.log(i);
                                    if (i === 5) {
                                    }
                                }, i * 1000);
                            }
                        }
                        
                        function finalMessage() {
                            console.log("Counting complete!");
                        }

                        printNumbersWithDelay()