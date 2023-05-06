public class RecentCounter 
{
    private LinkedList<int> _slideWindow;
    
    public RecentCounter() 
    {
        _slideWindow = new LinkedList<int>();
    }
    
    public int Ping(int t) 
    {
        _slideWindow.AddLast(t);
        while (_slideWindow.First.Value < t - 3000)
            _slideWindow.RemoveFirst();
        return _slideWindow.Count;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.Ping(t);
 */