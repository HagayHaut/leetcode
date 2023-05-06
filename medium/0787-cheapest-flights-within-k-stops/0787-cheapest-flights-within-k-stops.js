/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dist = Array(n).fill(Infinity);
    dist[src] = 0;
    
    for (let i = 0; i <= k; i++) {
        const temp = [...dist];
        flights.forEach(([from, to, price]) => {
            if (dist[from] < Infinity) {
                temp[to] = Math.min(temp[to], dist[from] + price);
            }
        })
        dist = temp;
    }
    
    return dist[dst] < Infinity ? dist[dst] : -1;
};