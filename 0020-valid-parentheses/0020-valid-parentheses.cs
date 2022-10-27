public class Solution {
    public bool IsValid(string s) {
        string brackets = "(){}[]";
        Stack<int> stack = new Stack<int>();
        
        foreach (var c in s) {
            int bracketIdx = brackets.IndexOf(c);
            if (bracketIdx % 2 == 0) {
                stack.Push(brackets[bracketIdx + 1]);
            } else {
                if (stack.Count < 1 || stack.Pop() != c) return false;
            }
        }
        
        return stack.Count == 0;
    }
}