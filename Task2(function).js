// 1. Write a function called greet that takes a name as a parameter and logs a greeting message.
// function greet(name){
//     console.log(`Hello ${name}`);
// }

// greet("Jimmy");



// 2. Write a function that takes a string representing a number (e.g., "42") and converts it to an actual number. 
// Then, check if the number is greater than 50 and return a corresponding message.
// function checkNum(str){
//     let num = parseInt(str);
//     console.log(num);

//     if(num > 50){
//     console.log("num is greater than 50");
//     }
// }

// checkNum("42");


// 3. Write a function that accepts a string with a number and converts it to a floating-point number. 
// Return the result of multiplying the number by 2
// function takeNum(str){
//     let num = parseFloat(str);
//     console.log(num);
    
//     res = num * 2;
//     console.log(res);
// }
// takeNum("12.4345");


// 4. Create a function that checks if the number is between 1 and 100 (inclusive). If it is, return "Valid", otherwise return "Invalid".
//    function checkNum(num){
//     if(num >= 1 && num <= 100){
//         console.log("valid number");
//     }else{
//         console.log("invalid number");
//     }
//    }
//    checkNum(12);


   
// 5. Write a function that takes a grade (between 0 and 100) and returns the letter grade: "A" for scores between 90 and 100, 
// "B" for scores between 80 and 89, "C" for scores between 70 and 79, and "F" for scores below 70.
//    function grade(num){
//     if(num >= 90 && num <=100){
//         console.log("grade A");
//     }else if(num >= 80 && num <= 89){
//         console.log("B grade");
//     }else if(num >= 70 && num <= 79){
//         console.log("C grade");
//    }else{
//     console.log("F grade");
//    }
// }
// let num = Number(prompt("Enter Number:"));
// grade(num);



// 6. Write a function called isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
    // function isEven(num){
    //     if(num % 2 == 0){
    //         console.log("Even Number");
    //     }else{
    //         console.log("Odd Number");
    //     }
    // }
    // let num = Number(prompt("Enter Number:"));
    // isEven(num);


// 7. Write a function that takes a string and checks if it contains only numbers. 
// Return "Valid number" if the string contains only digits, otherwise return "Invalid number".
    // function checkNum(str){
    //     let isNum = Number(str);
        
        
    //     if(isNum){
    //         console.log("valid number");
    //     }else{
    //         console.log("Invalid number");
    //     }
        
    // }
    //  checkNum("3123");



// 8. Create a function that takes a string as an argument and returns "Vowel" if the string is a vowel (a, e, i, o, u) 
// and "Not Vowel" if it is not.
    // function checkStr(str){
    //     if(str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u"){
    //         console.log("vowel");
    //     }else{
    //         console.log("not vowel");
    //     }
    // }
    // checkStr("deep");


// 9. Create a function that takes a string representing a day of the week (e.g., "Monday", "Saturday") 
// and returns "Weekday" if it is a weekday (Monday through Friday), and "Weekend" if it is a Saturday or Sunday.
    // function checkDay(day){
    //     if(day === "Saturday" || day === "Sunday"){
    //             console.log("Weekend");
    //         }else{
    //             console.log("Weekday");
    //         }
    // }
    // checkDay("Saturday");



    
// 10. Write a function that takes a number as an argument and returns "High" if the number is greater than 100, 
// "Medium" if the number is between 50 and 100, and "Low" if it is less than 50.
    // function printNum(num){
    //     if(num > 100){
    //         console.log("High");
    //     }else if(num >=50 && num <= 100){
    //         console.log("Medium");
    //     }else{
    //         console.log("Low");
    //     }
    // }
    // let num = Number(prompt("Enter Number:"));
    // printNum(num);


    
// 11. Write a function that takes a string representing a month (e.g., "January", "August") and returns the season 
// in which the month falls. Assume that "Winter" is from December to February, "Spring" is from March to May, 
// "Summer" is from June to August, and "Fall" is from September to November.
    // function checkMonth(month){
    //     // const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     // let month = month1.toUpperCase();
    //     if(month === "December" || month === "January" || month === "February"){
    //         console.log("winter month");
    //     }else if(month === "March" || month === "April" || month === "May"){
    //         console.log("Summer month");
    //     }else if(month === "June" || month === "July" || month === "August"){
    //         console.log("Summer month");
    //     }else{
    //         console.log("Fall months");
    //     }    
    // }
    // let month = prompt("Enter the month:");
    // checkMonth(month);


// 12. Write a function that takes a year as an argument and returns whether the year is a leap year. 
// A year is a leap year if it is divisible by 4, but not divisible by 100 unless it is also divisible by 400.
    // function checkYear(year){
    //     if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
    //         console.log("Leap year");
    //     }else{
    //         console.log("not a leap year");
    //     }
    // }
    // let year = Number(prompt("Enter the year:"));
    // checkYear(year);



//14. Write a function called isDivisibleByBoth that takes a number and checks if it’s divisible by both 3 and 5.
    // function isDivisibleByBoth(num){
    //     if(num % 3 == 0 && num % 5 == 0){
    //         console.log("divisible by both ");
    //     }else{
    //         console.log("Not divisible by both ");
    //     }
    // }
    // let num = Number(prompt("Enter the number:"));
    // isDivisibleByBoth(num);


//15. Create a function called timeToSeconds that takes two parameters, hours and minutes, and returns the total time in seconds.
    // function timeToSeconds(hours, minutes){
    //     let totalTime = (hours * 60 * 60) + (minutes * 60);
    //     console.log(`Total time in seconds: ${totalTime}`);
    // }
    // timeToSeconds(4, 30);


//16. Create a function called ageInDays that takes a person’s age in years and returns their approximate age in days.
        // function ageInDays(age){
        //     let days = age * 365;
        //     console.log(`age in days: ${days}`);
        // }
        // ageInDays(21);


//17. Write a function factorial that takes a positive integer n and returns its factorial using a for loop.
        // function factorial(num){
        //     let fin = 1;
        //     for(let i = 1; i <= num; num++){
        //          fin = fin*i;
                 
        //     }
        //     return fin;
            
        // }
        // console.log(factorial(5));


//18. Write a function sumOfOddNumbers that takes a number n and returns the sum of all odd numbers from 1 to n.
    // function sumOfOddNumbers(n){
    //     let sum = 0;
    //     for(let i = 1; i <= n; i=i+2){
    //         sum += i;
    //     }
    //         console.log(sum);
    // }
    
    // sumOfOddNumbers(3);


// 19. Write a function that takes a number and checks if it is a perfect number. A perfect number is 
// a positive integer that is equal to the sum of its proper divisors (excluding the number itself). 
// For example, 6 is a perfect number because 1 + 2 + 3 = 6.

    // function checkNum(num){
    //     let sum = 0;
    //     for(let i = 1; i < num; i++){
    //         if(num % 2 == 0){
    //             sum += i;
    //         }
    //     }
    //     console.log(sum);
    // }
    // checkNum(6);










