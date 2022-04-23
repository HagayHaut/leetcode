// ARRAY ALGORITHMS WORTH SAVING

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