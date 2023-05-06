// the trick here is to use two stacks
// one for values, one for current min
class MinStack  {
    constructor() {
        this.stack = [];
        this.min = [Infinity];
    }
    
    push(val) {
        this.stack.push(val);
        this.min.push(Math.min(this.min[this.min.length - 1], val));
    }
    
    pop() {
        this.stack.pop();
        this.min.pop();
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        return this.min[this.min.length - 1];   
    }
};

