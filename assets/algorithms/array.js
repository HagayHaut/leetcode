// ARRAY ALGORITHMS WORTH SAVING



// Find the most common item in an array
// mostCommonInArray([2,1,3,1,1,6,6,2,4,2,4,1,8,1])
//>> '1: 5 times'
function mostCommonInArray(arr) {
    // store count of items in object (key is item, value is count)
    // to do this: if item key exists, increment value
    // else create key and initialize at 1
    let counts = {};
    for(item of arr) {
        if(counts[item]) counts[item]++;
        else {
            counts[item] = 1;
        }
    }
    // store object entries in array and sort by decreasing value (index 1 of each entry)
    // first entry is [most common item, item count]
    const entries = Object.entries(counts)
    const mostCommon = entries.sort((a, b) => b[1] - a[1] )[0]
    return `${mostCommon[0]}: ${mostCommon[1]} times`
}




// Pascal's triangle
// returns first n rows of Pascal's triangle
// each number is sum of two numbers above it:
//  .....1.....
//  ....1.1....
//  ...1.2.1...
//  ..1.3.3.1..
//  .1.4.6.4.1.

// pascalsTriangle(4)
// >> [[1],[1,1],[1,2,1],[1,3,3,1]]

function pascalsTriangle(numRows) {
    // starting with first two rows so there is something to add
    // return fist or both if 1 or 2
    let result = [[1],[1,1]]
    if(numRows<1) return [];
    else if(numRows === 1) return result.slice(0,1);
    else if ( numRows === 2) return result;
    // if more than two, store row above in var
    // initiate current row with 1 (need to manually add first and last because relying on sum)
    else {
        for(let j = 3; j <= numRows; j++) {
            const prevRow = result[result.length-1]
            const currentRow = [1];
            // loop through all internal nums of current loop (nums with two parents above) 
            // add sum of parents to current row
            for(let i = 0; i < prevRow.length-1; i++) {
                currentRow.push(prevRow[i]+prevRow[i+1])
            }
            // need to manually add last like first (no parents), then add our row to result
            // next row will use this row as prevRow
            currentRow.push(1)
            result.push(currentRow)
        }
    }
    return result;
}




// Returns new array with repeats removed
// removeRepeats([1,1,2,3,3,4,5,6,7,7])
// >> [1,2,3,4,5,6,7]
function removeRepeats(arr) {
    // sets require unique elements, so they remove repeats
    // array >> set >> array
    return Array.from(new Set(arr))
}

// TWO SUM - return indices of arr elements that add up to target
// twoSum([1, 2, 3, 5, 6], 5)
// >> [1,2]
// if none exist, return []
function  twoSum(arr, target) {
    let obj = {};
    // if needed (compliment) exists in obj, return i (current index) plus value of object key (index of needed)
    for(let i = 0; i < arr.length; i++) {
      const needed = target - arr[i];
      // if needed is not in obj, create property with num as key and index as value
      if(needed in obj) return [obj[needed], i];
      obj[arr[i]] = i
    }
    // return empty array if loop ends with no return
    return [];
}

// Rotate array right by x places
// rotateByX([1,2,3,4,5], 3)
// >> [3,4,5,1,2]
function rotateByX(arr, x) {
    const end = arr.slice(-x)
    arr.splice(-x)
    arr.unshift(...end)
    return arr;
}  

// Add 1 to number stored as digits in array
// addOne([2,3,9])
// >> [1,4,0]
function addOne(arr) {
    const num = parseInt(arr.join('')) + 1
    return num.toString().split('').map(num => parseInt(num))
}

// Print nested arrays as rows
// nestedArrayRows([[1,2,3],[4,5,6],[7,8,9]])
// >> 'row 0'
// >> '1'
// >> '2'
// >> '3'
// >> 'row 1'
// >> '4'
// >> '5'
// >> '6'
// >> ...
function nesterArrayRows(arr) {
    // loop through top level arrs, looping through nested items of each
    // print 'row i' when j is 0 (i is row number, j=0 means first item of nested arr)
    // important to print 'row i' before printing arr[i][j]
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(j === 0) console.log(`row ${i}`);
            console.log(arr[i][j].toString());
        }
    }
}

// Function that moves element to specified index
// moveArrayElement([1,2,3,4],3,0) >> (arr,element,index)
// >> [3,1,2,4]
function moveArrayElement(arr,element,index) {
    // find current index of element and use it to remove element
    const preIndex = arr.indexOf(element);
    arr.splice(preIndex,1);
    // insert element in arr at given index 
    arr.splice(index,0,element);
    return arr;
}






// Filter blank/falsey values from array
// filterBlank([1,0,2,null,3,'']);
// >> [1,2,3]
function filterBlank(arr) {
    // only returns values that evaluate to true
    // if just value expression, blank will be falsey
    return arr.filter( value => value )
}







// Return a random element from an array
function randomFromArray(arr) {
    // 1. Math.random() returns random num between 0-1
    // 2. multiply that by max-min (includes all possible nums, except min)
    // 3. so add min
    // 4. get floor of result (need integer)
    function randomFromRange(min,max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    // call our function to get random integer between 0 and index after last
    // can't do arr.length-1 because using Math.floor(always rounds down)
    return arr[randomFromRange(0,arr.length)]
}







// Return nth largest item from an array
// nthLargestFromArray([2,4,3,5,6,7,1],3)
// >> 5
function nthLargestFromArray(arr,n) {
    return arr.sort((a,b) => a - b)[arr.length-n];
}







// Write a function that takes a number (n) and a value
// return an array containing n times of that value
// nValuesArray('potato',3);
// >> [ 'potato', 'potato', 'potato' ]
function nTimesValue(value,n) {
    const result = [];
    for(let i = 0; i < n; i++) {
        result.push(value)
    }
    return result;
}






// Returns array with unique elements from two arrays
// uniqueToOneArray([1,2,3,4],[2,3,4,5,6,7])
// >> [1,5,6,7]
function uniqueToOneArray(arr1,arr2) {
    const uniques = [];
    // if an item isn't in the other array, it's unique
    arr1.forEach(item => {
        if(!arr2.includes(item)) uniques.push(item)
    });
    arr2.forEach(item => {
        if(!arr1.includes(item)) uniques.push(item)
    });
    return uniques;
}







// Create array with range including inputs
function arrayRange(min,max) {
    const range = [];
    for(let i = min; i <= max; i++) {
        range.push(i)
    }
    return range;
}





// Create array range not including inputs
function arrayRangeBetween(min,max) {
    const range = [];
    for(let i = min + 1; i < max; i++) {
        range.push(i);
    }
    return range;
}





// Rotate array left one position
function rotateLeft(arr) {
    return arr.slice(1).concat(arr[0]);
}




// rotate string right one position
function rotateRight(arr) {
    let last = arr[arr.length-1];
    let missingLast = arr.slice(0,-1);
    missingLast.unshift(last);
    return missingLast;
}




// check if input is an array
function isArray(input) {
    return Array.isArray(input);
}




// nondestructively clone array
function nondestructiveArrayClone(arr) {
  return [...arr]
}




// get first n item of array 
// defaults to first item
function getFirstNOfArray(arr, n = 1) {
    return arr.slice(0, n);
}




// join all elements of array into one string
// each element should be separated by a space
function arrayToString(arr) {
    return arr.join(' ')
}

