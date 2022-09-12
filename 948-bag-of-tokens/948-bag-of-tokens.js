/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */

// greedy approach
// maximize power when losing score, 
// minimize power cost when gaining score

const bagOfTokensScore = function(tokens, power) {
    let [score, maxScore] = [0, 0];
    let [l , r] = [0, tokens.length - 1];
    
    tokens.sort((a, b) => a - b);
    
    while (l <= r) {
        // minimize power when buying score
        if (power >= tokens[l]) {
            power -= tokens[l];
            score++;
            maxScore = Math.max(score, maxScore);
            l++;
        }
        // maximize power when spending score
        else if (score > 0) {
            score--;
            power += tokens[r];
            r--;
        }
        // can't 
        else {
            break;
        }
    }
    
    return maxScore;
};