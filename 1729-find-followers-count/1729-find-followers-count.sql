# Write your MySQL query statement below
SELECT  f.user_id as user_id, COUNT(f.follower_id) as followers_count FROM Followers as f GROUP BY f.user_id ORDER BY f.user_id ASC