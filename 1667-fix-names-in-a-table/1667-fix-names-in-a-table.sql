# Write your MySQL query statement below
SELECT u.user_id ,
 CONCAT (
      UPPER(LEFT(u.name ,1)),
     LOWER (SUBSTRING(u.name ,2))
     ) As name 
     FROM Users As u ORDER BY u.user_id ASC 