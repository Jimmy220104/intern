// 19. Write a function that takes a number and checks if it is a perfect number. A perfect number is 
// a positive integer that is equal to the sum of its proper divisors (excluding the number itself). 
// For example, 6 is a perfect number because 1 + 2 + 3 = 6.

    // function checkNum(num){
    //     let sum = 0;
    //     for(let i = 1; i < num; i++){
    //         if(num % i == 0){
    //             sum += i;
    //         }
    //     }
    //     console.log(sum);
    // }
    // checkNum(6);


// 20. Write a function that takes a 3 digit number and check whether number is Armstrong or not. 
// example: 153 is 3 digit armstrong number

    // function isArmstrong(num){
    //     let original = num;
    //     let sum = 0;

    //     while(num > 0){

    //     let lastDig = num % 10;
        // let cubeEnd = lastDig ** 3;
    //     sum += cubeEnd;
        
    //     num = Math.floor(num/10);
    //     }
    //     return sum === original;
    // }
    // console.log(isArmstrong(153));

//21. Write a function that take a number and checks if it is a prime number or not. example: 5, 7 is prime numbers
    // function isPrime(num){
    //     if(num<= 1){
    //         return false;
    //     }
    //     for(let i = 2; i < Math.sqrt(num); i++){
    //         if(num % i === 0){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // let num = Number(prompt("Enter the number:"));
    // console.log(isPrime(num));



// 22. Write a function that take a number and checks if it is a palindrome number or not.
//  example: 35253, 5151515 is palindrome number
    
    // function isPalindrome(num){
    //     // let str = num.toString();
    //     // let res = str.split('').reverse().join('');
    //     // return res == str;
    //     let original = num;
    //     let num2= 0;
    //     while(num>0){
    //         let lastDig = num % 10;
    //         num2 = num2 * 10 + lastDig;
    //         num = Math.floor(num/10);

    //     }
    //     return original === num2;
        

    // }

    
    // console.log(isPalindrome(12121));    



// 23. Write a JavaScript loop to calculate the digital root of a number without using arrays, objects, or strings. 
// The digital root of a number is the single-digit value obtained by an iterative process of summing its digits 
// until a single digit is reached.

    // function digRoot(num){
    //     while(num >=10){
    //     let sum = 0;
        
    //     while(num > 0){
    //         let lastDig = num % 10;
    //         sum += lastDig;
    //         num = Math.floor(num / 10);
            
            
    //     }
    //     num = sum;
    // }
    // return num;
    // }       
    // console.log(digRoot(567));

// 24. Write a JavaScript loop to print the first 10 numbers in the Fibonacci sequence,
//  but instead of using arrays or recursion, store only the last two Fibonacci numbers in variables.

    // function fibonacci(num){
    //     let num1 = 0;
    //     let num2 = 1;

        

    //     while(num > 0){
    //         console.log(num1);
    //         let num3  = num1 + num2;
    //         num1 = num2;
    //         num2 = num3;
    //         num--;
            
    //     }
        
    // }
    // fibonacci(10);
    



