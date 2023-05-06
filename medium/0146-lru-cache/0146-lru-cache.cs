public class LRUCache {
    private int capacity = 0;
    private LinkedList<int[]> list = new LinkedList<int[]>();
    private Dictionary<int, LinkedListNode<int[]>> map = new Dictionary<int, LinkedListNode<int[]>>();

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int Get(int key) {
        if (!map.ContainsKey(key)) return -1;
        
        Reorder(map[key]);
        
        return map[key].Value[1];
    }
    
    public void Put(int key, int val) {
        if (map.ContainsKey(key)) map[key].Value[1] = val;
        else 
        {
            if (map.Count == this.capacity)
            {
                map.Remove(list.Last.Value[0]);
                list.RemoveLast();
            }
            
            map.Add(key, new LinkedListNode<int[]>(new int[2] { key, val }));
        }
        
        Reorder(map[key]);
    }
    
    private void Reorder(LinkedListNode<int[]> node) {
        if (node.Previous != null) list.Remove(node);
        if (list.First != node)  list.AddFirst(node);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */