# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
DELETE t1 FROM person t1 
 JOIN person t2
 WHERE t1.id > t2.id AND
 t1.email = t2.email;