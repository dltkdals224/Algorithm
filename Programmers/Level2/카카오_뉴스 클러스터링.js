// 2022.12.30
function solution(str1, str2) {
  // 대문자 통일.
  const TARGET_STR1 = str1.toUpperCase();
  const TARGET_STR2 = str2.toUpperCase();

  // 다중 집합화
  const MULTIPLE_SETS = (string) => {
    const RETURN_ARRAY = [];
    const STRING_LENGTH = string.length;

    for (let i = 0; i < STRING_LENGTH - 1; i++) {
      RETURN_ARRAY.push(string.slice(i, i + 2));
    }

    return RETURN_ARRAY;
  };

  // 자카드 유사도 검사
  const Jacquard = (array1, array2) => {
    const regex = /[^a-zA-Z]/;
    const ARRAY1 = array1.filter((x) => {
      return !regex.test(x);
    });
    const ARRAY2 = array2.filter((x) => {
      return !regex.test(x);
    });

    const TARGET_MAP1 = new Map();
    ARRAY1.forEach((val) => {
      TARGET_MAP1.set(val, (TARGET_MAP1.get(val) || 0) + 1);
    });

    const TARGET_MAP2 = new Map();
    ARRAY2.forEach((val) => {
      TARGET_MAP2.set(val, (TARGET_MAP2.get(val) || 0) + 1);
    });

    let intersection = 0;
    for (let target of TARGET_MAP1.keys()) {
      intersection += Math.min(
        TARGET_MAP1.get(target) ?? 0,
        TARGET_MAP2.get(target) ?? 0
      );
    }
    let union = ARRAY1.length + ARRAY2.length - intersection;

    if (intersection === 0 && union === 0) {
      return 65536;
    } else {
      return Math.floor((intersection / union) * 65536);
    }
  };

  return Jacquard(MULTIPLE_SETS(TARGET_STR1), MULTIPLE_SETS(TARGET_STR2));
}

solution("FRANCE", "french"); // 16384
solution("handshake", "SHAKE hands"); // 65536
solution("aa1+aa2", "AAAA12"); // 43690
solution("E=M*C^2", "em*c^2"); // 0
solution("E=M*C^2", "e=m*c^2"); // 65536
solution("BAAAA", "AAA"); // 32768
solution("abdddd", "dddefggg"); // 13107
solution("abab", "baba"); // 32768

// Map으로 푼 속도
// 테스트 1 〉	통과 (0.40ms, 33.4MB)
// 테스트 2 〉	통과 (0.42ms, 33.5MB)
// 테스트 3 〉	통과 (0.39ms, 33.6MB)
// 테스트 4 〉	통과 (1.55ms, 33.8MB)
// 테스트 5 〉	통과 (0.33ms, 33.6MB)
// 테스트 6 〉	통과 (0.25ms, 33.6MB)
// 테스트 7 〉	통과 (1.09ms, 33.6MB)
// 테스트 8 〉	통과 (0.33ms, 33.5MB)
// 테스트 9 〉	통과 (0.44ms, 33.5MB)
// 테스트 10 〉	통과 (0.49ms, 33.5MB)
// 테스트 11 〉	통과 (0.48ms, 33.6MB)
// 테스트 12 〉	통과 (0.25ms, 33.5MB)
// 테스트 13 〉	통과 (0.37ms, 33.6MB)
