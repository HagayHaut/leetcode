
class MyCalendarThree {
    constructor() {
        this.list = new Map();
    }
    
    book(start, end, { list } = this) {
        // increment start count, decrement end count
        list.set(start, (list.get(start) || 0) + 1);
        list.set(end, (list.get(end) || 0) - 1);
        
        const entries = Array.from(list).sort((a, b) => a[0] - b[0]);
        let max = 0, val = 0;
        
        for (const [k, v] of entries) {
            if (v !== undefined) {
                val += v;
                max = Math.max(max, val);
            }
        }
        
        return max;
    }
};

