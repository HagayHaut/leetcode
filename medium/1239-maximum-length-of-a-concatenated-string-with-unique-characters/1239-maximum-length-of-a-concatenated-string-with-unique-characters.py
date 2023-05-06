class Solution:
    def maxLength(self, arr: List[str]) -> int:
        uniq = []
        for s in arr:
            u = set(s)
            if len(u) == len(s): uniq.append(u)
                
        concat = [set()]
        for u in uniq:
            for c in concat:
                if not c & u:
                    concat.append(c | u)
        
        return max(len(cc) for cc in concat)