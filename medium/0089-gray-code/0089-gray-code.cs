public class Solution 
{
    public IList<int> GrayCode(int n) 
    {
        var res = new List<int> { 0 };
        for (int i = 0; i < n; i++) 
        {
            int size = res.Count;
            for (int k = size - 1; k >= 0; k--) 
                res.Add(res[k] | 1 << i);
        }
        return res;
    }
}