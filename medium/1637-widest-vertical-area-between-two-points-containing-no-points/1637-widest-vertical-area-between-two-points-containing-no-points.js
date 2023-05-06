/**
 * @param {number[][]} points
 * @return {number}
 */


// don't need y values
const maxWidthOfVerticalArea = function(points) {
    const xValues = new Set();
    
    points.forEach(([x, y]) => xValues.add(x));
    
    const sortedX = [...xValues].sort((a, b) => a - b);
    
    let maxWidth = 0;
    
    for (let i = 0; i < sortedX.length - 1; i++) {
        maxWidth = Math.max(maxWidth, sortedX[i+1] - sortedX[i]);
    }
    
    return maxWidth;
};