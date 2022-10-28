public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int[] res = new int[2];
        
        int l = 0, r = numbers.Length - 1;
        
        while (l < r) {
            int sum = numbers[l] + numbers[r];
            if (sum == target) {
                res[0] = l + 1;
                res[1] = r + 1;
                break;
            }
            if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
        
        return res;
    }
}