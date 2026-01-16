// task 1 = Create a function that returns a Promise and resolves after 2 seconds with the message "Hello after delay".
function greet(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Hello Jimmy");
        }, 2000);
    })
    
}
greet().then((msg) =>{
    console.log(msg);
})


// task 2 = Goal: Create a function checkEven(number) that returns a Promise.
//     Resolve with "Even number" if even.
//     Reject with "Odd number" if odd.

function checkNum(num){
    return new Promise((resolve, reject) => {
        if(num % 2 === 0){
            resolve("num is even");
        }else{
            reject("num is odd");
        }
    })
}
checkNum(19).then((msg) =>{
    console.log(msg);
}).catch((err) => {
    console.log(err);
})



// task 3 = Simulate a fake API call that takes 3 seconds and returns a list of users
    const user = [{
        name: "Jimmy",
        age: 21,
        role: "Batsman"
    },{
        name: "Dev",
        age: 22,
        role: "Wk, Batsman"
    },{
        name: "Vraj",
        age: 21,
        role: "Right-arm fast Bowler"
    },{
        ame: "Bhargav",
        age: 21,
        role: "Right-arm off-spin"
    }
]

function call(){
    return new Promise((resolve,reject) => {
        let success = true;
        if(success){
        setTimeout(() => {
            resolve(user);
        }, 3000);
        }else{
            reject("unable to fetch");
        }
    })
}
call().then((msg) =>{
    console.log(msg);
}).catch((err) => {
    console.log(err);
})


// task 4 = Create 3 functions:
// 	startTask() → resolves "Task started"
// 	processTask() → resolves "Task in progress"
// 	endTask() → resolves "Task completed"
// 	Call them in sequence using .then() chaining.
function start(){
    return new Promise((resolve)=>{
        resolve("Task started");
    })
}
function progress(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Task in progress");
        }, 2000);
    })
}
function end(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Task completed");
        }, 3000);
    })
}

start().then((msg) =>{
    console.log(msg);
})

progress().then((msg) =>{
    console.log(msg);
})
end().then((msg) =>{
    console.log(msg);
})


// task 5=Step 1: User places an order — takes 1 second.
//        Step 2: Check if the item is in stock — takes 2 seconds.
//             If item is "pizza", it's available.
//             For any other item, reject with "Item not available".
//        Step 3: Process payment — takes 1.5 seconds.
//        Step 4: Confirm order.

function order(item){
    
    return new Promise((resolve, reject)=>{
        if(item === "pizza"){
            setTimeout(() => {
                console.log("Order placed");
            }, 1000);
        
            setTimeout(() => {
                resolve("It's available");
            },2000)
        
            setTimeout(() => {
                console.log("processing payment");
            }, 3500);

            setTimeout(() => {
                console.log("order confirmed");
            }, 4500);

            }else{
                reject("Item not available");
            }
    })
}
order("pizza").then((msg) =>{
    console.log(msg);
}).catch((err) => {
    console.log(err);
})