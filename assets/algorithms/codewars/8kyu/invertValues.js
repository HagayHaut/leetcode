// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.





// my solution
const invert = array => array.map(n => n === 0 ? -0 : n > 0 ? -n : n + -2 * n)
// a week later
const flip = arr => arr.map(x => -x) 




// // better solution
const invert2 = array => array.map(num => -num);