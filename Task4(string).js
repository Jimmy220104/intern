// 1. Write a function that takes a string as input and returns the string reversed.

    // function revStr(){
    //     let str1 = "hello";
    //     let str2 = "";
        
    //     for(let i = str1.length - 1; i >= 0; i--){
    //         str2 += str1[i];
    //     }
    //         console.log(str2);
    // }
    // revStr();



// 2. Create a function that counts the number of vowels in a string.    

    // function countVowel(){
    //     let str = "hello world";
    //     let str2 = str.toLowerCase();
    //     let count = 0;

    //     for(let i = 0; i <= str.length-1; i++){
    //         if(str2[i] == 'a' || str2[i] == 'e' || str2[i] == 'i' || str2[i] == 'o' || str2[i] == 'u'){
    //             count++;
    //         }
    //     } 
    //     return count;
    // }
    // console.log(countVowel());



// 3. Write a function that takes a sentence and returns the sentence with each word capitalized.

    // function capitalizeWords(){
    //     let str = "hello world from javascript";
    //     let str2 = str.split(" ");
    //     let res = str2.map((el) => {
    //           return el[0].toUpperCase() + el.slice(1)
    //     }).join(" ");
    //     return res;   

        
    // }
    // console.log(capitalizeWords());


//4. Create a function that checks if a given string is a palindrome (reads the same forward and backward, ignoring spaces and case).

    // function isPalindrome(){
    //     let str = "A man a plan a canal Panama";
    //     let str2 = str.replaceAll(" ", "").toLowerCase();
    //     let res = "";
        
    //     for(let i = str2.length - 1; i >= 0; i--){
    //         res += str2[i];
    //         
    //     }
    //         if(str2 === res){
    //             return true;
    //         }else{
    //             return false;
    //         }
        
        
    // }
    // console.log(isPalindrome());



// 5. Write a function that returns the longest word in a sentence.

    // function findLongestWord(){
    //     let str = "I am learning JavaScript string methods";
    //     let str1 = str.split(" ");
    //     let res = "";
        

    //     for(let word of str1){
    //         if(word.length > res.length){
    //             res = word;
    //         }
    //     }
    //     return res;
        

    // }
    // console.log(findLongestWord());


// 6. Create a function that repeats a given string n times without using the .repeat() method.

    // function repeatString(val){
    //     let str = "abc"; 
    //     let res = "";

    //     for(let i = 0; i <= val-1; i++){
    //             res += str;
    //         }
        
    //     return res;
    

    // }
    // console.log(repeatString(3));



// 7. Write a function that removes duplicate characters from a string.

    // function removeDuplicates(){
    //     let str = "javascript";
    //     let res = "";

    //     for(let i = 0; i <= str.length - 1; i++){
    //         if(!res.includes(str[i])){
    //             res += str[i];
    //         }
    //     }
    //     return res;
    // }
    // console.log(removeDuplicates());



//8. Create a function that counts the number of occurrences of a specific character in a string.

    // function countOccurrence(ele){
    //     let str = "hello world";
    //     let count = 0;

    //     for(let i = 0; i <= str.length - 1; i++){
    //             if(str[i] == ele){
    //                 count++;
    //             }
    //     }
    //     return count
    // }
    // console.log(countOccurrence("l"));



//9. Write a function that replaces all spaces in a string with a specific character (e.g., replace spaces with underscores).

    // function replaceSpaces(){
    //     let str = "hello world";
    //     let res ="";

    //     for(let i = 0; i <= str.length - 1; i++){
    //         if(str[i] == " "){
    //             res += "_";
    //         }else{
    //             res += str[i];
    //         }
    //     }
    //     return res;
    // }
    // console.log(replaceSpaces());


// 10. Write a function that extracts the domain name from a given URL string.

    // function extractDomain(){
    //     let str = "https://www.example.com/path?name=value";
    //     let str2 = str.replace("https://" , "").replace("http://" , "");
    //     let res = str2.split("/")[0];
        
    //     let ans = res.slice(4);
    //     console.log(ans);


    //     // let res = str.slice(12, 23);
    //     // console.log(res);
        

    // }
    // extractDomain();



// 11. Write a function that takes a sentence as input and converts it to camelCase format.
    
    // function toCamelCase(){
    //     let str = "Hello world from JavaScript";
    //     let str1 = str.split(" ");
        
    //     let res = str1.map((word, index) => {
    //         if(index == 0){
    //             return word.toLowerCase();
    //         }
    //         return word[0].toUpperCase() + word.slice(1);

    //     }).join("");

    //     return res;

    // }
    // console.log(toCamelCase());


// 12. Write a function that finds and returns the most frequent character in a string. If multiple characters 
// have the same frequency, return any one of them.

    // function mostFrequentCharacter(){
    //     let str = "javascript";
    //     let res = "";
    //     let maxCount = 0;

    //     for(let i = 0; i <= str.length-1; i++){
    //         let count = 1;
    //         for(let j = i+1; j <= str.length-1; j++){
    //             if(str[i] === str[j]){
    //                 count++;
    //             }
    //         }
    //         if(count > maxCount){
    //             maxCount = count;
    //             res = str[i];
    //         }
    //     }
    //     return res;
    // }
    // console.log(mostFrequentCharacter());



//13. Write a function that converts a numeric string (e.g., "1234") into words

    function numberToWord(){
        let str = "1234";
        let str1= []
    }


// 14. Write a function that performs basic string compression using the counts of repeated characters. 
// If the compressed string is not shorter than the original, return the original string.

    function compressString(){
        let str = "aabcccccaaa";
        let count = 1;
        let res = "";

        for(let i = 0; i <= str.length-1; i++){
            if(str[i] == str[i+1]){
                count++;
            }else{
                res += str[i] + count;
                count = 1;
            }
        }
        if(res.length < str.length){
            return res;
        }else{
            return str;
        }
    
    }
    console.log(compressString());
 



// 15. Write a function that removes duplicate words from a sentence.

    // function removeDuplicateWords(){
    //     let str = "this is is a test test";
    //     let str1= str.split(" ");
    //     let res = [];

    //     for(let i = 0; i <=str1.length-1; i++){
    //         if(!res.includes(str1[i])){
    //             res.push(str1[i]);
    //         }
    //     }
    //     let ans = res.join(" ");
    //     return ans;

        
    // }
    // console.log(removeDuplicateWords());
