// 25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.

function isDivBy3and7(num){
    if(num % 3 === 0 || num % 7 === 0){
      return true;
    }
    else { return false; }
}
  
isDivBy3and7();