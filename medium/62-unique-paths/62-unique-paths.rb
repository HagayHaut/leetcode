# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def unique_paths(m, n)
    dp = Array.new n, 1
    
    (m - 1).times do 
        row = [1]
        (1...n).each do |i|
            row << row[-1] + dp[i] 
        end
        
        dp = row
    end
    
    dp[-1]
end