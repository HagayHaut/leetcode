/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
    const getSlope = ([x1, y1], [x2, y2]) => {
        return x1 === x2 ? Infinity : (y1 - y2) / (x1 - x2);
    }
    for (let i = 1; i < coordinates.length - 1; i++) {
        const slope1 = getSlope(coordinates[i], coordinates[i-1]);
        const slope2 = getSlope(coordinates[i], coordinates[i+1]);
        if (slope1 !== slope2) return false;
    }
    return true;
};