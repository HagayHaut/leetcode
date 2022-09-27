# @param {Integer[]} coins
# @param {Integer} amount
# @return {Integer}
def coin_change(coins, amount)
    dp = [false] * (amount + 1)
    dp[0] = 0
    1.upto(amount) do |i|
        poss = []
        coins.each do |coin|
            poss << dp[i - coin] if coin <= i && dp[i - coin] 
        end
        dp[i] = poss.min + 1 if poss.size > 0
    end
    dp[-1] ? dp[-1] : -1
end