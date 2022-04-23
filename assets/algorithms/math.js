// MATH/NUMBER ALGORITHMS

// Prime Number Checker
function isPrime(num) {
    if(num<=1) return false; 
    else {
        // square root is always the max div (bigger divs need smaller divs)
      const maxDiv = Math.sqrt(num);
      /* loop through numbers between 2 and maxDiv to 
      see if num is divisible by any */
      for(let i = 2; i <= maxDiv; i++) {
        if(num % i == 0)  return false; 
      }
      // will return true if loop finishes
      return true;
    }
}

// Returns num if it it prime, else returns next higher prime number
function nextHigherPrime(num) {
    if(isPrime(num)) { return num; }
    else {
      for(let i = num+1; i < num*2; i++) {
        if(isPrime(i)) { return i; }
      }
    }
}

// Fibonacci sequence generator 
// (returns array of first n fib nums)
function fibonacciGenerator(num) {
    /* declare result variable, and two starting values, push both to result */
    let result = [];
    let f0 = 0;
    let f1 = 1;
    result.push(f0,f1);
    // looping between 2 and input num
    for(let i = 2; i < num; i++) {
      let fi = f1 + f0;
      // push sum of starting values to result
      result.push(fi);
      // reassign starting values
      f0 = f1;
      f1 = fi;
    }
    // return final array
    return result;
}

// Sum Digits of Positive Integer
function sumDigits(num) {
    // split num into array of string digits
    let digitArr = num.toString().split('');
    // loop thru array to convert digits to numbers
    for(let i=0;i<digitArr.length;i++) {
      digitArr[i] = parseInt(digitArr[i]);
    }
    // return sum of numbers in array
    return digitArr.reduce((pre,cur) => pre+cur);
}