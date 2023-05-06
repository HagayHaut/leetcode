
class StockSpanner {
    constructor() {
        this.stack = [];
    }
    
    next(price) {
        let res = 1, { stack } = this;
        
        while (stack.length && stack.at(-1)[0] <= price) {
            res += stack.pop()[1];
        }
        
        stack.push([price, res]);
        
        return res;
    }
};


/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */