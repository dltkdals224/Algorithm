-- 2024.09.24
SELECT MCDP_CD AS '진료과코드', COUNT(*) AS '5월예약건수'
FROM APPOINTMENT
WHERE YEAR(APNT_YMD) = '2022' AND MONTH(APNT_YMD) = '5'
GROUP BY MCDP_CD
ORDER BY 2, 1

-- ORDER BY '5월예약건수', '진료과코드'
-- ORDER BY절을 위의 형태로 작성시, 정상적으로 수행되지 않음.
-- '5월예약건수'와 '진료과코드'는 실제 열 이름이 아닌 문자열 상수로 취급되어 결과적으로 의미 있는 정렬을 수행하지 않는다.