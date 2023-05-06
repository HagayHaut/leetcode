public class Solution {
    public int ShortestPath(int[][] grid, int k) {
        int m = grid.Length, n = grid[0].Length;
        
        if (k >= m + n - 2) return m + n -2;
        
        Queue<(int, int, int, int)> q = new Queue<(int, int, int, int)>();
        HashSet<(int, int, int)> seen = new HashSet<(int, int, int)>();
        q.Enqueue((0, 0, k, 0));
        
        while (q.Count > 0) 
        {
            var (i, j, K, s) = q.Dequeue();
            
            if ((i, j) == (m - 1, n - 1)) return s;
            
            (int, int)[] dirs = new (int, int)[4] { (i+1,j),(i-1,j), (i,j+1), (i,j-1)};
            
            foreach (var (ii, jj) in dirs) 
            {
                if (0 <= ii && ii < m &&0 <= jj && jj < n && K >= grid[ii][jj])
                {
                    var curr = (ii, jj, K - grid[ii][jj]);
                    if (!seen.Contains(curr))
                    {
                        seen.Add(curr);
                        q.Enqueue((ii, jj, K - grid[ii][jj], s + 1));
                    }
                }
            }
            
        }
        
        return -1;
    }
}