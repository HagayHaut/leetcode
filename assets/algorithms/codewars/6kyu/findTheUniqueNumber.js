// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// my solution 
function findUniq(arr) {
    let uniq;
    Array.from(new Set(arr)).forEach(n => arr.filter(x => x == n).length === 1 ? uniq = n : null)
    return uniq;
}


// better solution
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
