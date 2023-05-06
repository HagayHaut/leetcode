
class FreqStack {
    constructor() {
        this.fMap = {};
        this.fStack = [];
    }
    
    push(val, { fMap, fStack } = this) {
        fMap[val] = ++fMap[val] || 1;
        if (fStack.length < fMap[val]) {
            return fStack.push([val])
        }
        fStack[fMap[val] - 1].push(val);
    }
    
    pop({ fMap, fStack } = this) {
        const last = fStack.at(-1);
        const res = last.pop();
        if (!last.length) fStack.pop();
        fMap[res]--;
        return res;
    }
}

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */