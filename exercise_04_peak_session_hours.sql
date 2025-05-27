-- 4. Peak Session Hours
SELECT e.title, COUNT(s.session_id) AS session_count
FROM Sessions s
JOIN Events e ON s.event_id = e.event_id
WHERE TIME(s.start_time) BETWEEN '10:00:00' AND '12:00:00'
GROUP BY s.event_id;