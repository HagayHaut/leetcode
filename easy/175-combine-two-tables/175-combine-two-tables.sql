# Write your MySQL query statement below
SELECT 
    p.firstName, p.lastName, a.city, a.state FROM
person AS p LEFT JOIN address AS a
Using (personId);
