# @param {Integer[]} coins
# @param {Integer} amount
# @return {Integer}
def coin_change(coins, amount)
    dp = Array.new amount + 1, false
    dp[0] = 0
    (1..amount).each do |i|
        possibles = []
        coins.each do |coin|
            possibles << dp[i - coin] if i >= coin && dp[i - coin] 
        end
        dp[i] = possibles.min + 1 if !possibles.empty?
    end
    return dp[-1] ? dp[-1] : -1
end