# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
    n = nums.size
    res = [1] * n
    l = r = 1
    1.upto(n - 1) do |i|
        l *= nums[i - 1]
        res[i] *= l
        # '~' wraps the index around
        r *= nums[-i]
        res[~i] *= r
    end
    res
end