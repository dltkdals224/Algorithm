SELECT
  ID,
  CASE NTILE(4) OVER (ORDER BY SIZE_OF_COLONY DESC)  -- !
    WHEN 1 THEN 'CRITICAL'   -- 상위 25%
    WHEN 2 THEN 'HIGH'       -- 상위 26~50%
    WHEN 3 THEN 'MEDIUM'     -- 상위 51~75%
    ELSE 'LOW'               -- 상위 76~100%
  END AS COLONY_NAME
FROM ECOLI_DATA
ORDER BY ID;

-- 크기 기준으로 상위부터 4등분 버킷(1~4)을 부여.