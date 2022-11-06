public class Solution 
{
    public IList<IList<int>> PermuteUnique(int[] nums) 
    {
        IList<IList<int>> res = new List<IList<int>>();
        int n = nums.Length;
        if (nums.Length == 0) return res;
        bool[] allotted = new bool[n];
        for (int i = 0; i < n; i++) { allotted[i] = false; }
        IList<int> list = new List<int>();
        Array.Sort(nums);
        
        void backtrack() 
        {
            if (list.Count == n)
            {
                res.Add(new List<int>(list));
                return;
            }
            for (int i = 0; i < n; i++)
            {
                if (
                    allotted[i] ||
                    (i > 0 && 
                    nums[i - 1] == nums[i] && 
                    !allotted[i - 1])
                )
                {
                    continue;
                }
                allotted[i] = true;
                list.Add(nums[i]);
                backtrack();
                allotted[i] = false;
                list.RemoveAt(list.Count - 1);
            }
        }
        
        backtrack();
        return res;
    }
}