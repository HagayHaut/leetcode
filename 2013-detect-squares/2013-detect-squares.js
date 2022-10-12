
class DetectSquares {
    constructor() {
        this.map = {};
        this.pts = [];
    }
    
    add([x, y], { map, pts } = this) {
        const key = this.getKey(x, y);
        map[key] ||= 0;
        map[key]++;
        pts.push([x, y]);
    }
    
    count([x1, y1], { pts } = this, res = 0) {
        for (const [x2, y2] of pts) {
            const isDiagonal = Math.abs(x1 - x2) === Math.abs(y1 - y2);
            const isSame = x1 === x2 || y1 === y2;
            if (!isDiagonal || isSame) continue;
            res += this.getSquareCount(x1, y1, x2, y2);
        }
        
        return res;
    }
    
    getKey(x, y) {
        return `${x},${y}`;
    }
    
    getSquareCount(x1, y1, x2, y2, { map } = this) {
        const [key1, key2] = [this.getKey(x1, y2), this.getKey(x2, y1)];
        const [count1, count2] = [(map[key1] || 0), (map[key2] || 0)];
        return count1 * count2;
    }
};

