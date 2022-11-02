public class Solution {
    public int MinMutation(string start, string end, string[] bank) {
        HashSet<string> uniqs = new HashSet<string>(bank);
        HashSet<string> seen = new HashSet<string>();
        
        if (!uniqs.Contains(end)) return -1;
        
        int[] valid = new int[4] { 'A', 'C', 'G', 'T' };
        
        List<string> nextSteps (string val) {
            List<string> res = new List<string>();
            
            for (int i = 0; i < val.Length; i++)
            {
                foreach (char v in valid)
                {
                    if (v == val[i]) continue;
                    
                    char[] nextBuilder = new char[val.Length];
                    
                    for (int j = 0; j < i; j++)
                    {
                        nextBuilder[j] = val[j];
                    }
                    nextBuilder[i] = v;
                    for (int j = i + 1; j < val.Length; j++)
                    {
                        nextBuilder[j] = val[j];
                    }
                    string next = string.Join("", nextBuilder);
                    if (!seen.Contains(next)) res.Add(next);
                }
            }
            
            return res;
        }
        
        Queue<string[]> q = new Queue<string[]>();
        q.Enqueue(new string[2] { start, "0" });
        
        while (q.Count > 0)
        {
            string[] deq = q.Dequeue();
            
            string cur = deq[0], turn = deq[1];
            
            if (cur == end) return Int32.Parse(turn);
            
            List<string> next = nextSteps(cur);
            
            foreach (string s in next)
            {
                if (uniqs.Contains(s) && !seen.Contains(s))
                {
                    seen.Add(s);
                    q.Enqueue(new string[2] { s, (Int32.Parse(turn) + 1).ToString() });
                }
            }
        }
        
        return -1;
    }
}