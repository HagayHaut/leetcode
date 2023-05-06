/**
 * @param {number[]} deck
 * @return {number[]}
 */

// use a queue that stores card indices
// if after revealing there are still cards, 
// 'shuffle' by q.push(q.shift)
const deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    // queue stores order of revealed cards
    const indexQ = Array(deck.length).fill().map((x, i) => i),
          result = [];
    
    while (indexQ.length) {
        result[indexQ.shift()] = deck.shift();
        // shuffle
        if (indexQ.length) indexQ.push(indexQ.shift());
    }
    
    return result;
};

