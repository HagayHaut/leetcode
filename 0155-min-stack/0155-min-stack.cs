public class MinStack {
    Stack<int> stack = new Stack<int>();
    Stack<int> min = new Stack<int>();
    
    public MinStack() {
        this.min.Push(int.MaxValue);
    }
    
    public void Push(int val) {
        this.stack.Push(val);
        this.min.Push(Math.Min(this.min.Peek(), val));
    }
    
    public void Pop() {
        this.stack.Pop();
        this.min.Pop();
    }
    
    public int Top() {
        return this.stack.Peek();
    }
    
    public int GetMin() {
        return this.min.Peek();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */