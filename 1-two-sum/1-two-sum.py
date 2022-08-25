class Solution(object):
    def twoSum(self, nums, target):
        hash = {}
        for i in range(len(nums)):
            needed = target - nums[i]
            if needed in hash:
                return [hash[needed], i]
            else:
                hash[nums[i]] = i;
        