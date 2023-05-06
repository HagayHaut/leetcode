public class Solution {
    public int[][] Insert(int[][] intervals, int[] newInterval) {
        IList<int[]> res = new List<int[]>();
        int i = 0;
        foreach (int[] interval in intervals)
        {
            int start = interval[0];
            int end = interval[1];
            
            if (newInterval[1] < start)
            {
                res.Add(newInterval);
                for (int j = i; j < intervals.Length; j++)
                {
                    res.Add(intervals[j]);
                }
                return res.ToArray();
            }
            else if (end < newInterval[0])
            {
                res.Add(new int[] {start, end});
            }
            else
            {
                newInterval[0] = Math.Min(newInterval[0], start);
                newInterval[1] = Math.Max(newInterval[1], end);
            }
            i++;
        }
        res.Add(newInterval);
        return res.ToArray();
    }
}