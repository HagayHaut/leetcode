/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = function(edges) {
    const edgeCount = {};
    for (const [v1, v2] of edges) {
        edgeCount[v1] ||= 0;
        edgeCount[v2] ||= 0;
        edgeCount[v1]++;
        edgeCount[v2]++;
        if (edgeCount[v1] > 1) return v1;
        if (edgeCount[v2] > 1) return v2;
    }
};