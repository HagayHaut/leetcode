/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function(words) {
    const dictionary = new Set(words);
    const res = [];
    
    words.forEach((word, i) => {
        const n = word.length;
        const dp = Array(word.length + 1).fill(false);
        dp[0] = true;
        for (let i = 1; i <= n; i++) {
            for (let j = (i === n ? 1 : 0); !dp[i] && j < i; j++) {
                dp[i] = dp[j] && dictionary.has(word.slice(j, i));
            }
        }
        if (dp[n]) res.push(word);
    })
    
    return res;
};