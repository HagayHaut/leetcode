/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function(words) {
    const dictionary = new Set(words);
    const res = [];
    
    words.forEach(word => {
        const n = word.length;
        const dp = Array(n + 1).fill(false);
        dp[0] = true;
        
        for (let i = 1; i <= n; i++) {
            for (let j = (i === n ? 1 : 0); j < i; j++) {
                if (!dp[i]) {
                    dp[i] = dp[j] && dictionary.has(word.slice(j, i));
                }
            }
            if (dp[n]) res.push(word);
        }
    })
    
    return res;
};