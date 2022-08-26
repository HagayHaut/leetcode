/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// Get store all distances in array
// Sort array, and return first k

// Makes this O(n log n) time
// Can be O(n) by using a min heap
// using heapify() in python
// but i don't want to make a heap in JS

// const getDist = point => point[0]**2 + point[1]**2;


const kClosest = function(points, k) {
    const dists = [],
          result = [];
    points.forEach(([x, y]) => dists.push([x**2 + y**2, x, y]));
    dists.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < k; i ++) {
        result.push([dists[i][1], dists[i][2]]);
    }
    return result;
};