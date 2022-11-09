
class StockSpanner {
    constructor() {
        this.prices = [];
    }
    
    next(price) {
        this.prices.push(price);
        let res = 0, i = this.prices.length - 1;
        
        while (i >= 0 && this.prices[i] <= price) {
            res++;
            i--;
        }
        
        return res;
    }
};


/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */