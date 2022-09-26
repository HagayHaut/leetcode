# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
    freq = nums.tally
    freq.each do |k, v|
        return k if v > nums.size / 2.0 
    end
end