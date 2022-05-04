// SORTING ALGORITHMS

// Selection sort
// repeatedly finds shortest from input, places into result array in order
// selectionSort([2,-4,7,45,-0.3,6])
// [-4,-0.3,2,6,7,45]
function selectionSort(arr) {
    let result = [];
    while(arr.length>0) {
        const smallest = Math.min(...arr)
        const index = arr.indexOf(smallest)
        result.push(smallest);
        arr.splice(index,1)
    }
    return result;
}

console.log(selectionSort([2,-4,7,45,-0.3,6]))