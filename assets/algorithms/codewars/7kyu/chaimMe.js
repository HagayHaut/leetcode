// Chain Me
// Write a generic function chainer
// Write a generic function chainer that takes a starting value,
// and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function
// (except the first function, which takes the starting value as its input).
// Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// returns 90;



// my solution
function chain(input, fns) {
    return fns.reduce((cur,fn) => fn(cur), input);
}


// other solutions
function chain(x, functions) {
    functions = functions || [];
    functions.forEach(function(fn) {
      x = fn(x);
    });
    return x;
}

function chain(input, func) {
    try { return func.reduce((acc, el) => el(acc), input) 
    }
    catch { 
      return "Error: chain function does not work" 
    }
}