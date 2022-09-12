/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = function(tokens, power) {
    let [score, maxScore] = [0, 0];
    let [l , r] = [0, tokens.length - 1];
    
    tokens.sort((a, b) => a - b);
    
    while (l <= r) {
        if (power >= tokens[l]) {
            power -= tokens[l];
            score++;
            maxScore = Math.max(score, maxScore);
            l++;
        }
        else if (score > 0) {
            score--;
            power += tokens[r];
            r--;
        }
        else {
            break;
        }
    }
    
    return maxScore;
};