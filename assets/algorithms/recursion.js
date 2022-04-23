// RECURSION ALGORITHMS

// Find factorial of a number
function recursiveFactorial (num) {
      if(num == 0||num == 1) return 1 
      else { return num * recursiveFactorial(num-1) }
}

// Exponent calculator 
function recursiveExponent (base, power) {
    if(power == 0)  return 1 
    else { return base * recursiveExponent(base,power-1) }
}

// Deep array iterator (flatten nested arrays)
function recursiveDeepIterate (arr) {
    const flatArr = []
    for (let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i])) {
            flatArr.push(...recursiveDeepIterate(arr[i]));
        } else { 
            flatArr.push(arr[i]) 
        }
    }
    return flatArr;
}

// Find nth number in fibonacci sequence
function recursiveNthFibonacci(n) {
    if(n==1||n==2) return 1; 
    else { return recursiveNthFibonacci(n-1)+recursiveNthFibonacci(n-2) }
}

// Use recursion to get numbers in range
// recursiveRange(2, 9)
//>> [3, 4, 5, 6, 7, 8]
function recursiveRange(start, end) {
    // if only two apart, only one num between
    if(end - start == 2) return [ start + 1 ]
    // range stores return value of recursive call
    // decrement end until if condition is true
    else {
        let range = recursiveRange(start, end - 1);
        range.push(end - 1);
        return range;
    }
  }

  // Sum array of integers using recursion
// recursiveSum([1, 2, 3, 4, 5, 6])
//>> 21
function recursiveSum(arr) {
    // check for ending condition
    if(arr.length === 1) return arr[0];
    // add first item to return value of recursive call
    // recursiveSum is called on array, minus first item
    else {
        return arr.shift() + recursiveSum(arr);
    }
}

// Check if num is even using recursion
// 1. 0 is even
// 2. every num is the same 'eveness' as one 2 below
function recursiveIsEven(num) {
    if(num === 0) return true;
    else if (num === 1) return false;
    else {
        return recursiveIsEven(num - 2);
    }
}
