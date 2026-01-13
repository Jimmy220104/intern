// Q1: Store your name, age, and favorite hobby in variables and print a sentence using them.
// let name = "Jimmy";
// let age = 21;
// let hobby = "Playing games";

// console.log("My Name is " + (name) + " " + "age is " + (age) + " " + "and my hobby is " + (hobby));


//Q2: Store a temperature in Celsius and convert it to Fahrenheit using a formula.
// const temp = 30;
// let far = ((temp) *  1.8) + 32;

// console.log("temp in far is: " + (far));


//Q3: Declare a variable for your bank balance. Simulate a deposit and a withdrawal. Show the updated balance.
// let bankBalance = 1000;
// let dep = 700;
// let wid = 200;

// let currBalance = (dep + wid);
// let updatedBalance = (bankBalance + currBalance);

// console.log("Updated balance is: " + (updatedBalance));


//Q4: Create 5 variables with meaningful names representing real-world objects or data.
// let firstName = "Jimmy";
// let cityName = "Ankleshwar";
// let age = 21;
// let isMale = true;
// let year = 2026;


//Q5 (using var)
// var age = 21;
// {
//     var age = 22;
//     console.log(age);
// }
// console.log(age);

// (using let)
// let age = 21;
// {
//     let age = 22;
//     console.log(age);
// }
// console.log(age);

// (using const)
// const age = 19;
// {
//     const age = 22;
//     console.log(age);
// }
// console.log(age);


//Q6: Create a const array and try adding new items to it.
// const arr = ["Apple", "Banana", "Pineapple"];
// const arr2 = arr.push("Orange", "Mango");

// console.log(arr);


//Q7: Try reassigning variables declared with let and const.
// let age = 21;
// age = 22;

// console.log(age);

// const name = "Jimmy";
// name = "Vraj";

// console.log(name);


//Q8: Declare variables of each type: string, number, boolean, object, array, null, undefined. Use typeof to log each type.
// let str = "Jimmy";
// console.log(typeof(str));

// let num = 21; 
// console.log(typeof(num));

// let isMale = true;
// console.log(typeof(isMale));

// const obj = {
//     x: 20,
//     y: 21,
// }
// console.log(typeof(obj));

// let arr = [18, 17, 7, 10];
// console.log(typeof(arr));

// let user = null;
// console.log(typeof(null));

// let name;
// console.log(typeof(name));

//Q9: Create an object to represent a book: title, author, year, and a boolean for if it’s read. Log the object.
// const book = {
//     title: "Mahabharat",
//     Author: "Vedvyasji",
//     year: 1950,
//     isRead: true,
// }

// console.log(book);


//Q10: Make an array that includes a number, string, boolean, object, and another array. Log each item.
// const arr = [21 , "Jimmy", true , {city: "Ankleshwar"} , ["Apple", "Banana", "Pineapple"] ];

// console.log(arr);


//Q11: Convert two number strings to actual numbers and add them.
// let str1 = "10";
// let str2 = "20";

// let num1 = Number(str1);
// let num2 = Number(str2);

// let add = (num1 + num2);

// console.log(add);


//Q12: Convert a number to a string, concatenate it with other text, and log the result.
// let num = 2201;
// let str1 = "Jimmy";

// let str2 = num.toString();
// let merge = str1.concat(str2);
// console.log(merge);


//Q13: Use Boolean() to convert different values (0, 1, "", "hello", null, undefined) and log the results.
// let val1 = 0;
// let finVal1 = Boolean(val1);
// console.log(finVal1);

// let val2 = 1;
// let finVal2 = Boolean(val2);
// console.log(finVal2);

// let val3 = "";
// let finVal3 = Boolean(val3);
// console.log(finVal3);

// let val4 = "hello";
// let finVal4 = Boolean(val4);
// console.log(finVal4);

// let val5 = null;
// let finVal5 = Boolean(val5);
// console.log(finVal5);

// let val6 = undefined;
// let finVal6 = Boolean(val6);
// console.log(finVal6);


// Q14: Given a variable with user input as a string, check if it's a valid number using isNaN() and convert it.
// let inp = prompt("enter value:");
// if(isNaN(inp)){
//     console.log("enter valid number");
// }else{
//     let fin = Number(inp);
//     console.log(fin);
//     console.log(typeof(fin));
// }


//Q15: Use if-else to categorize a person based on age: child, teen, adult, senior.
// let age = prompt("enter age:");

// if(age < 5){
//     console.log("child");
// }else if(age < 18){
//     console.log("teen");
// }else if(age < 50){
//     console.log("Adult");
// }else{
//     console.log("senior");
// }


//Q16: Take a number and determine if it is even or odd using %.
// let num = 20;

// if(num % 2 == 0){
//     console.log("num is even");
// }else{
//     console.log("num is odd");
// }


// Q17: Declare variables for stored username/password. Compare with user input and print login success or failure.
// const userName = "Jimmy2201";
// let userInp = prompt("Enter Username: ");

// if(userName === userInp){
//     console.log("login success");
// }else{
//     console.log("login failed");
// }


// Q18. If purchase amount is over $100, apply a 10% discount. Otherwise, apply 5%. Show the final price.
// let amount = Number(prompt("Enter an amount:"));
// let dis1 = (amount)* 10/100;
// let dis2 = (amount)* 5/100;


// if(amount > 100) {
//     let finPrice = amount - dis1;
//     console.log(finPrice);
// }else{
//     let finPrice2 = amount - dis2;
//     console.log(finPrice2);
// }


// Q19: Take a score and assign a grade: A (90+), B (80–89), C (70–79), D (60–69), F (below 60).
// let score = Number(prompt("enter the number:"));

// if(score > 90){
//     console.log("A+ grade");
// }else if(score > 80 && score <= 89){
//     console.log("B grade");
// }else if(score > 70 && score <= 79){
//     console.log("C grade");
// }else if(score > 60 && score <= 69){
//     console.log("D grade");
// }else{
//     console.log("F grade");
// } 

// Q20. Based on a variable storing the color ("red", "yellow", "green"), print a message for what to do ("Stop", "Slow down", "Go").
// const color = prompt("enter the color:");

// if(color=== "Red"){
//     console.log("stop!!");
// }else if(color === "Yellow"){
//     console.log("Slow down");
// }else if(color === "Green"){
//     console.log("Go");
// }else{
//     console.log("enter valid color");
// }


