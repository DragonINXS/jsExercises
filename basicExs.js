// // 25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.

// function isDivBy3and7(num){
//     if(num % 3 === 0 || num % 7 === 0){
//       return true;
//     }
//     else { return false; }
// }

// isDivBy3and7();


// =============================================================================================
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

// function revNum(num) {
//     let x = num;
//     return Number(String(x).split("").reverse().join(""));
// }
  
// revNum(659);


// ============================================================================================
//  2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// function isPalindrome(str){
//     let revStr = str.split("").reverse().join("");
    
//     if (str.toLowerCase() === revStr.toLowerCase()) {
//       return true;
//     }
//     else{return false;}
// }
  
// isPalindrome("Bob");


//=============================================================================================

// Write a JavaScript program to calculate the factorial of a number
// In mathematics, the factorial of a non - negative integer n, denoted by n! ,
// is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 

// function factorial(num) {
//     let total = num;
//     if( num === 0 || num === 1) {
//       return 1;
//     }
//     while(num > 1) {
//       num --;
//       total *= num;
//     }
//     return total;
// }
  
// factorial(5);

// ==============================================================================================
