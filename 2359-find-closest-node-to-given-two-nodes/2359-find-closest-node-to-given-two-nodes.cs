public class Solution {
    public void dfs(int node, int[] edges, List<int> dist, List<bool> seen)
    {
        seen[node] = true;
        int neighbor = edges[node];
        if (neighbor != -1 && !seen[neighbor]) {
            dist[neighbor] = 1 + dist[node];
            dfs(neighbor, edges, dist, seen);
        }
    }
    
    public int ClosestMeetingNode(int[] edges, int node1, int node2) 
    {
        var n = edges.Length;
        var dist1 = Enumerable.Repeat(int.MaxValue, n).ToList();
        var dist2 = Enumerable.Repeat(int.MaxValue, n).ToList();
        var seen1 = Enumerable.Repeat(false, n).ToList();
        var seen2 = Enumerable.Repeat(false, n).ToList();
        dist1[node1] = 0;
        dist2[node2] = 0;

        dfs(node1, edges, dist1, seen1);
        dfs(node2, edges, dist2, seen2);

        int minDistNode = -1, minDist = int.MaxValue;
        for (int node = 0; node < n; node++)
        {
            int curDist = Math.Max(dist1[node], dist2[node]);
            if (minDist > curDist)
            {
                minDist = curDist;
                minDistNode = node;
            }
        }

        return minDistNode;
    }
}