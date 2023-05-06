

class TimeMap {
    private store: Map<string, Array<[string, number]>>;
    
    constructor() {
        this.store = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        this.store.set(key, this.store.get(key) || []);
        this.store.get(key).push([value, timestamp]);
    }

    get(key: string, timestamp: number): string {
        let res: string = '';
        const values = this.store.get(key) || [];
        
        // binary search
        let l: number = 0;
        let r: number = values.length - 1;
        
        while (l <= r) {
            const m: number = (l + r) >> 1;
            if (values[m][1] <= timestamp) {
                res = values[m][0];
                l = m + 1;
            }
            else {
                r = m - 1;
            }
        }
        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */