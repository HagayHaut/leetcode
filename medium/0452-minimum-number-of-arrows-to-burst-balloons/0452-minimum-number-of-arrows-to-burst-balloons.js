/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function(points) {
    if (points.length === 1) return 1;
    points.sort((a, b) => a[0] - b[0]);
    let res = 1,
        arrowReach = points[0][1];
    
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] <= arrowReach) {
            arrowReach = Math.min(arrowReach, points[i][1]);
        }
        else {
            res++;
            arrowReach = points[i][1];
        }
    }
    
    return res;
};