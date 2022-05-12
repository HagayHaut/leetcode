// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// my solution
function moveZeros(arr) {
    const noZeros = arr.filter(el => el !== 0)
    const zeros = []
    for(let i = 0; i < arr.length - noZeros.length; i++) {
      zeros.push(0)
    }
    return [...noZeros,...zeros]
    
}

// better solution
function moveZeros(arr) {
    return [...arr.filter(el => el !== 0), ...arr.filter(el => el === 0)]
}