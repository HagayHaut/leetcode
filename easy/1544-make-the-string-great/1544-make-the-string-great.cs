public class Solution 
{
    public string MakeGood(string s) 
    {
        Func<char,bool> isUpper = c => c == Char.ToUpper(c);
        Stack<char> stack = new Stack<char>();
        
        foreach (char c in s)
        {
            if (stack.Count == 0)
            {
                stack.Push(c);
                continue;
            }
            if (isUpper(c))
            {
                if (stack.Peek() == Char.ToLower(c))
                {
                    stack.Pop();
                }
                else 
                {
                    stack.Push(c);
                }
            }
            else 
            {
                if (stack.Peek() == Char.ToUpper(c))
                {
                    stack.Pop();
                }
                else 
                {
                    stack.Push(c);
                }
            }
        }
        char[] res = stack.ToArray();
        Array.Reverse(res);
        return new string(res);
    }
}