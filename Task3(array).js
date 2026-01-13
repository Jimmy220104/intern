// 1. Write a function that takes an array of numbers and returns the maximum number in the array.

// const arr = [2, 34, 32, 66, 45, 23, 10];

// let maxVal = arr.reduce((res, el)=>{
//     if(res < el){
//         return el;
//     }else{
//         return res;
        
//     }
    
// })

// console.log(maxVal);




// 2. Write a function that takes an array of numbers and returns the minimum number in the array.

// const arr = [2, 34, 32, 66, 45, 23, 10];

// let minVal = arr.reduce((res, el)=>{
//     if(res > el){
//         return el;
//     }else{
//         return res;
        
//     }
    
// })

// console.log(minVal);



// 3. Write a function that takes an array of numbers and returns the sum of all elements.

// function arrSum(arr){
//     let sum = 0;

//     for(let i = 0; i<= arr.length-1; i++){
//         sum += arr[i];
//     }
//     return sum;

// }
// const arr = [1, 2, 3, 4, 5];
// console.log(arrSum(arr));



// 4. Write a function that takes an array and returns a new array with elements in reverse order.

//   function arrRev(arr){

//     // let revArr = arr.reverse();
//     // console.log(revArr);
//     let arr1 = [];
//     for(let i = arr.length - 1; i >= 0; i--){
//            arr1.push(arr[i]);
//     }
//     console.log(arr1);

//   }
//   const arr = [1, 2, 3, 4, 5];
// arrRev(arr);



// 5. Write a function that checks if a given value exists in an array.
// function checkVal(val){

//     const arr = [1, 2, 3, 4, 5];
//     let res = arr.includes(val);
//     console.log(`checking value: ${res}`);
// }

// checkVal(4);



// 6. Write a function that counts how many times a specific element appears in an array.

// function countVal(value){
//     const arr = [1, 2, 3, 2, 4, 3, 2, 5, 2];
//     let count = 0;
//     for(let i = 0; i <= arr.length - 1; i++){
//         if(value == arr[i]){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVal(2));



// 7. Write a function that removes duplicate elements from an array and returns a new array.

// function remVal(){
//     const arr = [1, 2, 3, 2, 4, 3, 2, 5, 2];
//     let res = [];
//     for(let i = 0; i <= arr.length - 1; i++){
//         if(!res.includes(arr[i])){
//             res.push(arr[i]);
//         }
//     }
//     return res;


// }
// console.log(remVal());


// 8. Write a function that returns the second largest number in an array.

// function secondLargestNum(){
//     const arr = [2, 3, 42, 43, 56, 45];
//     // let desc  = arr.sort((a, b) => { return b - a});
//     // return arr[1];
//     
// }
// console.log(secondLargestNum());


// 9. Write a function that merges two sorted arrays into a single sorted array.

    // function merge(){
    //     const arr1 = [1, 2, 3, 4, 5];
    //     const arr2 = [11, 12, 13];

    //     // let res = [...arr1, ...arr2];
    //     let res = arr1.concat(arr2);
    //     return res; 
    // }
    // console.log(merge());


// 10. Write a function that rotates an array to the right by k positions.

// function rotate(){
//     const arr = [1, 2, 3, 4, 5];
//     let k = 2;

//     k = k % arr.length;  //by this we ensure how many times loop runs
//     for(let i = 0; i < k; i++){
//         arr.unshift(arr.pop());
//     }
//     return arr;
// }
// console.log(rotate());




// 11. Given an array containing n distinct numbers taken from 0 to n, find the missing number.

    // function findEle(){
    //     const arr = [0, 1, 2, 3, 5];

    //     for(let i = 0; i <= arr.length - 1; i++){
    //         if(arr[i] !== i){
    //             return i;
    //         }
    //     }
    // }
    // console.log(findEle());


//12. Write a function that takes an array and a target sum and returns all pairs of numbers that add up to the target.

    // function pairs(sum){
    //     const arr = [1, 2, 3, 4, 5];
    //     const res = [];

    //     for(let i = 0; i <= arr.length; i++){
    //         for(let j = i+1; j <= arr.length; j++){
    //             if(arr[i] + arr[j] == sum){
    //             res.push([arr[i] , arr[j]]);
              
    //             }
    //         }
    //     }
    //     return res;
    // }
    // console.log(pairs(5));



// 13. Given two arrays, return a new array containing elements that appear in both arrays (without duplicates).

    // function twoArr(){
    //     const arr1 = [1, 2, 3, 4, 5];
    //     const arr2 = [2, 4, 5, 6, 7];
    //     let res = [];

    //     for(let i = 0; i <= arr1.length - 1; i++){
    //         for(let j = 0; j <= arr2.length - 1; j++){
    //             if(arr1[i] === arr2[j]){
    //                 res.push(arr1[i]);
    //             }
    //         }
    //     }
    //     return res;
    // }
    // console.log(twoArr());



// 14. Given an array of integers, find the first element that appears only once.
    // const arr = [1, 2, 3, 1, 3, 4, 2];
    
    // function once(arr){
    //     let count = [];
    //     // for(let i = 0; i <= arr.length - 1; i++){
    //     //     count[arr[i]] = (count[arr[i]] || 0) + 1
    //     // }
    //     // for(let i = 0; i <= arr.length - 1; i++){
    //     //     if(count[arr[i]] === 1){
    //     //         return arr[i];
    //     //     }
    //     // }
    //     // return count;

    //     for(let i = 0; i <= arr.length ; i++){
    //         count = count ^ arr[i];
            
    //     }
    //     return count;


    // }
    // console.log(once(arr));



// 15. Implement a function to sort an array without using JavaScript’s built-in sort() method.

//     function sortArr(){
//         const arr = [11, 2, 34, 13, 22];
//         let temp;

//         for(let i = 0; i <= arr.length-1; i++){
//             for(let j = 0; j <= arr.length-1; j++){
//                 if(arr[j] > arr[j+1]){
//                     temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                 }
//             }
//         }

//         // return arr;
//         console.log(arr);
        
//     }
// sortArr();



// 16. Given an unsorted array of integers, find the length of the longest consecutive sequence of numbers.

    //  function unSortArr(){
    //     const arr = [12, 15, 13, 18, 14];
    //     let arr2 =  arr.sort((a, b) => {return a-b});
    //     let res = [];
    //     // console.log(arr2);

    //     for(let i = 0; i <= arr2.length - 1; i++){
    //         for(let j = i+1; j <= arr2.length - 1; j++){
    //             if(arr2[i] - arr2[j] == -1){
    //                 res.push([arr2[i] , arr2[j]]);
    //             }
    //         }
    //     }
    //     // console.log(res);
    //     let arr3 = res.flat();     //convert subarray in array
    //     // console.log(arr3);
    //     let res1 = [];

    //         for(let i = 0; i <= arr3.length - 1; i++){
    //             if(!res1.includes(arr3[i])){
    //             res1.push(arr3[i]);
    //             }
    //         }
    //         // console.log(res1);
    //         let final = res1.length;
    //         console.log(final);
    // }
    // unSortArr();



// 17. Given an array of numbers, return an array where each element at index i 
// is the product of all elements except the one at i, without using division.

    // function productSum(){
    //     const arr = [1, 2, 3, 4, 5];
    //     let res = [];

    //     for(let i = 0; i <= arr.length-1; i++){
    //         let start = 1;
    //         for(let j = 0; j <= arr.length-1; j++){
    //             if(i !== j){
    //                 start *= arr[j];
    //             }
    //         }
    //         res.push(start);
    //     }
    //     console.log(res);

    // }
    // productSum();


//  18. Given an array of positive and negative numbers, rearrange it so that numbers alternate in sign while maintaining relative order.
   
    // function arrangeArr(){
    //     const arr = [1, 3, -2, -4, 5];
    //     let positiveArr = [];
    //     let negativeArr = [];
        
        
    //     for(let i = 0; i <=arr.length-1; i++){
    //         if(arr[i] > 0){
    //             positiveArr.push(arr[i]);
    //         }else{
    //             negativeArr.push(arr[i]);
    //         }
        
    //     }
    //     // console.log(positiveArr);
    //     // console.log(negativeArr);
    //     let res = [];
    //     let el1 = 0;
    //     let el2 = 0;

    //     for(let i = 0; i <=arr.length-1; i++){
    //         if(el1 < positiveArr[i]){
    //             res.push(positiveArr[i]);
                
    //         }

    //         if(el2 > negativeArr[i]){
    //             res.push(negativeArr[i]);
                
    //         }
    //     }
    //     return res;


    // }
    // console.log(arrangeArr());


//19. Given an array of integers, find the contiguous subarray (containing at least one number) that has 
// the largest sum and return that sum.


// 20. Given an array, find the element that appears more than n/2 times
//  (where n is the array length). Assume that such an element always exists.

    // function findEle(){
    //     const arr = [1, 2, 2, 2, 3, 5, 7, 2,];
    //     let count = 0;
    //     let el = 0;

    //     for(let i = 0; i <= arr.length-1; i++){
    //         if(count == 0){
    //             el = arr[i];
    //             // console.log(arr[i]);
    //             // console.log(el);
    //         }

    //         if(arr[i] === el){
    //             count++;
    //         }else{
    //             count--;
    //         }
    //         // console.log(arr[i]);
    //         // console.log(el);
    //     }
    //     return el;
    // }    
    // console.log(findEle());

