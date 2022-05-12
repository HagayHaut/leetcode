// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.




// my solution
function findShort(s){
    const words = s.split(' ')
    let short = words[0]
    words.forEach(word => word.length < short.length ? short = word : null)
    return short.length
}




// better solution
function findShort(s){
    return Math.min(...s.split(' ').map(word => word.length))
}