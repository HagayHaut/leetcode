# python has built in heap & queue
# so trying out another approach
# only min heap in python, so negative vals
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # make freq map
        count = Counter(tasks)
        # put values as negatives into array
        max_heap = [-cnt for cnt in count.values()]
        # turn array to min binary heap
        heapq.heapify(max_heap)
        
        time = 0
        q = deque() # stores [-cnt, idle time]
        
        # empty lists are falsy in python
        while max_heap or q:
            time += 1
            if max_heap:
                cnt = 1 + heapq.heappop(max_heap)
                if cnt:
                    q.append([cnt, time + n])
            
            if q and q[0][1] == time:
                heapq.heappush(max_heap, q.popleft()[0])
        
        return time