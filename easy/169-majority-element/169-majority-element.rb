# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
    nums.tally.each do |k, v|
        return k if v > nums.size / 2.0 
    end
end