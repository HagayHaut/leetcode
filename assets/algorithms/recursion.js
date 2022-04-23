// RECURSION ALGORITHMS

// Find factorial of a number
function factorial (num) {
      if(num == 0||num == 1) return 1 
      else { return num * factorial(num-1) }
}

// Exponent calculator 
function exponent (base, power) {
    if(power == 0)  return 1 
    else { return base * exponent(base,power-1) }
}

// Deep array iterator (flatten nested arrays)
function deepIterate (arr) {
    const flatArr = []
    for (let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i])) {
            flatArr.push(...deepIterate(arr[i]));
        } else { 
            flatArr.push(arr[i]) 
        }
    }
    return flatArr;
}

// Find nth number in fibonacci sequence
function nthFibonacci(n) {
    if(n==1||n==2) return 1; 
    else { return nthFibonacci(n-1)+nthFibonacci(n-2) }
}