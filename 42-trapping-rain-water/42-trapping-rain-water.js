/**
 * @param {number[]} height
 * @return {number}
 */

// at every position i
// take minimum of max left 
// height and max right height
// minus height currently at i
// is how much water per i

// if negative value, make 0

// min(left, right) - height[i]
// can store [minL, minR] in array with O(n) space
// can use two pointers:

// shift pointer with smaller value
const trap = function(height) {
    let l = 0,
        r = height.length - 1,
        maxL = height[0],
        maxR = height[r],
        water = 0;
    
    while (l < r) {
        // move left
        if (height[l] < height[r]) {
            l++;
            maxL = Math.max(maxL, height[l]);
            water += maxL - height[l];
        }
        // move right
        else {
            r--;
            maxR = Math.max(maxR, height[r]);
            water += maxR - height[r];
        }
    }
    
    return water;
};









