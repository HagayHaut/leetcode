/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function(score) {
    const copy = [...score].sort((a, b) => b - a);
    return score.map(s => {
        const place = copy.indexOf(s) + 1;
        if (place === 1) return 'Gold Medal';
        if (place === 2) return 'Silver Medal';
        if (place === 3) return 'Bronze Medal';
        return `${place}`;
    })
};