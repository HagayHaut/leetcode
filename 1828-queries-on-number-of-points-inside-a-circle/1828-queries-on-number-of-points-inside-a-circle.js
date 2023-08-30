/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    return queries.map((circle) => {
        return points.reduce((acc, point) => pointIsInCircle(circle, point)
                ? acc + 1
                : acc, 0);
    });
};

function pointIsInCircle([cx, cy, rad], [px, py]) {
    return (((cx - px)**2) + ((cy - py)**2))**0.5 <= rad;
}