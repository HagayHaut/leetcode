/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(c => c + extraCandies >= max);
};