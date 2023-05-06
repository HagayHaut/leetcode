public class Solution {
    public long MinimumTime(int[] time, int totalTrips) 
    {
        int maxTime = 0;
        foreach (int t in time)
            maxTime = Math.Max(maxTime, t);
        long left = 1, right = (long)maxTime * totalTrips;
        
        while (left < right)
        {
            long mid = (left + right) / 2;
            if (IsEnoughTime(time, totalTrips, mid))
                right = mid;
            else
                left = mid + 1;
        }
        return left;
    }
    
    private bool IsEnoughTime(int[] time, int totalTrips, long givenTime)
    {
        long trips = 0;
        foreach (int t in time)
            trips += givenTime / t;
        return trips >= totalTrips;
    }
}