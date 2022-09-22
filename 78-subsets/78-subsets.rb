# @param {Integer[]} nums
# @return {Integer[][]}
def subsets(nums)
    res = []
    subset = []
    dfs 0, subset, nums, res
    res
end

def dfs(i, subset, nums, res)
    return res << subset if i == nums.size
    
    dfs i + 1, [*subset, nums[i]], nums, res
    dfs i + 1, subset, nums, res
end