-- 2024.09.23
SELECT YEAR(YM) AS YEAR, ROUND(AVG(PM_VAL1), 2) AS PM10, ROUND(AVG(PM_VAL2), 2) AS 'PM2.5'
FROM AIR_POLLUTION
WHERE LOCATION1 = '경기도' AND LOCATION2 = '수원'
GROUP BY YEAR
ORDER BY YEAR

-- SELECT에서 정의된 ALIAS를 GROUP BY절과 ORDER BY절에서 사용 가능