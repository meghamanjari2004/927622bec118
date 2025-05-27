-- 2. Top Rated Events (min 10 feedbacks)
SELECT e.title, AVG(f.rating) AS avg_rating, COUNT(f.feedback_id) AS feedback_count
FROM Feedback f
JOIN Events e ON f.event_id = e.event_id
GROUP BY f.event_id
HAVING COUNT(f.feedback_id) >= 10
ORDER BY avg_rating DESC;