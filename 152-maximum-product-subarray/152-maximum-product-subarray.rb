# @param {Integer[]} nums
# @return {Integer}
def max_product(nums)
    res = nums.max
    cur_min = 1
    cur_max = 1
    
    nums.each do |n|
        if n == 0
            cur_min = cur_max = 1
            next
        end
        
        temp = cur_max * n
        cur_max = [cur_min * n, temp, n].max
        cur_min = [cur_min * n, temp, n].min
        res = [res, cur_max].max
    end
    
    res
end