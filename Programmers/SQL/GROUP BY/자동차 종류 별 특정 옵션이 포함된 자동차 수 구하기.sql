-- 2024.09.24
SELECT CAR_TYPE, COUNT(*) AS CARS
FROM CAR_RENTAL_COMPANY_CAR
WHERE OPTIONS REGEXP '통풍시트|열선시트|가죽시트'
GROUP BY CAR_TYPE
ORDER BY CAR_TYPE

-- REGEXP의 사용에 대해 알고있으면 편할 수 있음.
-- (* 코드를 짧게 작성할 수 있지만, 인덱싱을 적용 중이지 않다면 LIKE 보다 속도가 느림)
-- 관련 예시: https://hansuho113.tistory.com/59