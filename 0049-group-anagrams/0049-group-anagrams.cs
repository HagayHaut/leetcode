public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        
        string order(string s) {
            return String.Concat(s.OrderBy(c => c));
        }
        List<IList<string>> res = new List<IList<string>>();
        IDictionary<string, IList<string>> map = new Dictionary<string, IList<string>>();
        
        foreach (string s in strs) {
            string key = order(s);
            if (!map.ContainsKey(key)) {
                map.Add(key, new List<string>());
            }
            map[key].Add(s);
        }
        
        foreach (var item in map.Values) {
            res.Add(item);
        }
        
        return res;
    }
}