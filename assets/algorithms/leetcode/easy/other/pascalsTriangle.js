// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//  .....1.....
//  ....1.1....
//  ...1.2.1...
//  ..1.3.3.1..
//  .1.4.6.4.1.
 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30




// my solution
var generate = function(numRows) {
    let result = [[1],[1,1]]
    if(numRows === 1) return result.slice(0,1);
    else if ( numRows === 2) return result;
    else {
        for(let i = 3; i <= numRows; i++) {
            const prevRow = result[result.length-1]
            const currentRow = [1];
            for(let i = 0; i < prevRow.length-1; i++) {
                currentRow.push(prevRow[i]+prevRow[i+1])
            }
            currentRow.push(1)
            result.push(currentRow)
        }
    }
    return result;
};