public class Solution 
{
    public int MinFlips(int[][] mat) 
    {
        return Dfs(mat, new());
    }
    
    private int Dfs(int[][] mat, List<int> operations)
    {
        var n = mat[0].Length;
        if (operations.Count == n)
        {
            var changed = new int[n];
            var lastState = operations.ToArray();
            var maybe = 0;
            foreach (var row in mat)
            {
                var state = changed;
                for (int i = 0; i < n; i++)
                {
                    state[i] ^= row[i];
                    if (lastState[i] == 1)
                    {
                        state[i] ^= 1;
                        if (i > 0) state[i - 1] ^= 1;
                        if (i + 1 < n) state[i + 1] ^= 1;
                        maybe++;
                    }
                }
                changed = lastState;
                lastState = state;
            }
            foreach (var x in lastState)
                if (x == 1) return -1;
            return maybe;
        }
        operations.Add(0);
        var maybe1 = Dfs(mat, operations);
        operations[operations.Count - 1] =  1;
        var maybe2 = Dfs(mat, operations);
        operations.RemoveAt(operations.Count - 1);
        return Compare(maybe1, maybe2);
    }
    
    private int Compare(int x, int y)
    {
        return x < 0 || (y >= 0 && y < x) ? y : x;
    }
}