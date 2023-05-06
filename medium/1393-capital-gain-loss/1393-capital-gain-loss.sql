# Write your MySQL query statement below
SELECT 
    stock_name,
    SUM(IF(operation = 'buy', -price, +price)) AS capital_gain_loss
FROM stocks
GROUP BY stock_name;