// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// MY SOLUTION
function maskify (str) {
    if(str.length > 4){
        let newStr = str.substring(str.length - 4);
        let maskedChars = "#";
        return maskedChars.repeat(str.length - 4) + newStr;
    }
    else { return str;}
}

maskify("87638476237868777777");

// BEST SOLUTION
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


// =========================================================================================================


// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
//     You need to round the answer to 2 decimal places and return it as String.
//     If the given value is 0 then it should return 0.00
//     You will only be given Natural Numbers as arguments.

// Examples:

// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

// MY SOLUTION
function SeriesSum(n) {
    let total = 1;
    let dnom = 4;
    if (n === 0) { return 0..toFixed(2); }
    while(n > 1) {
      total += (1 / dnom);
      dnom += 3;
      n--;
    }
    return total.toFixed(2);
}

// BEST SOLUTION
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3);
    }
    return s.toFixed(2);
}


// ==========================================================================================================


// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// MY SOLUTION
function duplicates(str) {
    let sortedArray = str.toLowerCase().split("").sort();
    let foundDuplicatesArray = [];
    for(let i = 0; i < sortedArray.length - 1; i++ ) {
      // compares next index to current AND if index was not found in foundDuplicatesArray
      if(sortedArray[i + 1] === sortedArray[i] && foundDuplicatesArray.indexOf(sortedArray[i]) == -1) {
        foundDuplicatesArray.push(sortedArray[i]);
        }
    }
    return foundDuplicatesArray.length;
}
  
duplicates("Hello World");


// BEST SOLUTION - don't completely understand the regex part ???
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// 2ND BEST SOLUTION
function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}


// ==========================================================================================================

// Add the given number to its palindrome
// if its sum is a palindrome return the iteration count
// if its not repeat process with sum and repeat until sum is a palindrome

function revNum(theNumber) {
    return Number(theNumber.toString().split("").reverse().join(""));
}
  
function palinSum (n) {
    let num = Number(n);
    let i = 0;

    while (num !== revNum(num)) {
        i++;
        sum = num + revNum(num);
        num = sum;
    }

    return i;
}
  
palinSum(87); 


// ==============================================================================================================
  
  
// Sample inputs and outputs:

// 1 is read as "one 1" => 11
// 11 is read as "two 1s" => 21
// 21 is read as "one 2, then one 1" => 1211
// 9000 is read as "one 9, then 3 0s" => 1930
// 222222222222 is read as "twelve 2s" => 122

function lookAndSay (n) {
    strArr = n.toString().split("");
  
    let i = 0;
    let count = 1;
    let result = [];
  
    while(i < strArr.length){
      if(strArr[i+1] == strArr[i]) {
        count ++;
        i++;
      }
      if(strArr[i+1] !== strArr[i]){
        result.push(count);
        result.push(strArr[i]);
        count = 1;
        i++;
      }
    }
    return (Number(result.join("")));
}
  
sayIt(4422666);


// ==============================================================================================================


// Consecutive strings

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// take k -> arr.length    arr[length] -k iterations  SOMETHING LIKE THIS 
//
// reverse array then range of k then concatenate arr indexes of k range

function consec(strArr, k ) {

}


// ==============================================================================================================


// Largest 5 digit number in a series

// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net


function largest5() {
    
}
