# Write your MySQL query statement below
SELECT 
    customers.name AS Customers
FROM customers LEFT JOIN orders 
ON customers.id = orders.customerId
WHERE orders.id IS NULL;
