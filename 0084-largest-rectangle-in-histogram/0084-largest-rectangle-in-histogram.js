/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
    const stack = []; // stores index and height
    let maxArea = 0;

    heights.forEach((h, i) => {
        let start = i;
        while (stack.length && stack.at(-1)[1] > h) {
            const [idx, hgt] = stack.pop();
            maxArea = Math.max(maxArea, hgt * (i - idx));
            start = idx;
        }
        stack.push([start, h]);
    })

    for (const [i, h] of stack) {
        maxArea = Math.max(maxArea, h * (heights.length - i));
    }

    return maxArea;
};