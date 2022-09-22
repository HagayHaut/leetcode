# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
    res = []
    dfs(0, 0, candidates, target, res, [])
    res
end

def dfs(index, sum, nums, target, res, comb)
    return res << comb if sum == target
    return if sum > target || index == nums.size
    
    (index...nums.size).each do |i|
        dfs(i, sum + nums[i], nums, target, res, [*comb, nums[i]]) 
    end
end