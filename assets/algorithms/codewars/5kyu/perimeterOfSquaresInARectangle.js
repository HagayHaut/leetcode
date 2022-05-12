// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// see pic of diagram: https://www.codewars.com/kata/559a28007caad2ac4e000083

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216


// my solution
function perimeter(n) {
    if(n === 0) return 4;
   let fibs = [1, 1];
    for(let i = 1; i < n; i++) {
      fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    }
    return 4 * fibs.reduce((pre, cur) => pre + cur);
}

// better solution
const perimeter = n =>
  4 * Math.round((((1 + 5 ** .5) / 2) ** (n + 3) / 5 ** .5) - 1);