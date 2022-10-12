class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heapq._heapify_max(nums)
        res = None
        for _ in range(k):
            res = heapq._heappop_max(nums)
        return res