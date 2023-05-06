public class Solution {
    public bool IsValidSudoku(char[][] board) {
        IDictionary<int, HashSet<int>> rows = new Dictionary<int, HashSet<int>>();
        IDictionary<int, HashSet<int>> cols = new Dictionary<int, HashSet<int>>();
        IDictionary<(int, int), HashSet<int>> squares = new Dictionary<(int, int), HashSet<int>>();
        
        bool isInvalid(int r, int c, (int, int) s, int v) {
            return rows[r].Contains(v) || cols[c].Contains(v) || squares[s].Contains(v);
        }
                                                                   
        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                char v = board[r][c];
                if (v == '.') continue;
                (int, int) s = (r / 3, c / 3);
                if (!rows.ContainsKey(r)) rows.Add(r, new HashSet<int>());
                if (!cols.ContainsKey(c)) cols.Add(c, new HashSet<int>());
                if (!squares.ContainsKey(s)) squares.Add(s, new HashSet<int>());
                
                if (isInvalid(r, c, s, v)) return false;
                
                rows[r].Add(v);
                cols[c].Add(v);
                squares[s].Add(v);
            }
            
        }
        
        return true;
    }
}