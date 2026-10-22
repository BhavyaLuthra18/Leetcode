# Write your MySQL query statement below
SELECT p.email FROM person as p GROUP BY p.email HAVING COUNT(*) > 1