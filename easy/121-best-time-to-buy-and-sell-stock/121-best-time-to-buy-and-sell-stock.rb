# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    max_profit = 0
    min_price = prices[0]
    prices.each do |price| 
        profit = price - min_price
        max_profit = [max_profit, profit].max
        min_price = [min_price, price].min
    end
    max_profit
end