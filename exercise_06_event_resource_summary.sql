-- 6. Event Resource Summary
SELECT e.title,
       SUM(resource_type = 'pdf') AS pdfs,
       SUM(resource_type = 'image') AS images,
       SUM(resource_type = 'link') AS links
FROM Resources r
JOIN Events e ON r.event_id = e.event_id
GROUP BY r.event_id;