class TimeMap {
    constructor() {
        this.store = new Map();
    }

    set(key, value, timestamp) {
        this.store.set(key, this.store.get(key) || []);
        this.store.get(key).push([value, timestamp]);
    }

    get(key, timestamp) {
        let res = '';
        const values = this.store.get(key) || [];
        let l = 0;
        let r = values.length - 1;
        while (l <= r) {
            const m = (l + r) >> 1;
            if (values[m][1] <= timestamp) {
                res = values[m][0];
                l = m + 1;
            }
            else r = m - 1;
        }
        return res;
    }
};

