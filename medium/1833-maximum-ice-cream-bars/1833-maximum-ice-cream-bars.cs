public class Solution {
    public int MaxIceCream(int[] costs, int coins) {
        Array.Sort(costs);
        
        int res = 0;
        
        foreach (var cost in costs)
        {
            if (coins < cost) break;
            res++;
            coins -= cost;
        }
        
        return res;
    }
}