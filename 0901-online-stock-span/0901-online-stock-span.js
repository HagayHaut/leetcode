
class StockSpanner {
    constructor() {
        this.stack = [];
    }
    
    next(price) {
        let res = 1;
        
        while (this.stack.length && this.stack.at(-1)[0] <= price) {
            res += this.stack.pop()[1];
        }
        
        this.stack.push([price, res]);
        
        return res;
    }
};


/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */