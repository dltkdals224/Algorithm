// 2023.01.02
function solution(msg) {
  let answer = [];
  const DICTIONARY = new Map();

  // DICTIONARY setting
  for (let i = 65; i <= 90; i++) {
    DICTIONARY.set(String.fromCharCode(i), i - 64);
  }

  // dfs
  const dfs = (startIdx, depth) => {
    const NEXT = DICTIONARY.get(msg.slice(startIdx, startIdx + depth + 1));

    if (!NEXT) {
      DICTIONARY.set(
        msg.slice(startIdx, startIdx + depth + 1),
        DICTIONARY.size + 1
      );

      answer.push(DICTIONARY.get(msg.slice(startIdx, startIdx + depth)));

      return depth;
    }
    if (NEXT) {
      if (startIdx + depth >= msg.length) {
        answer.push(DICTIONARY.get(msg.slice(startIdx, startIdx + depth)));
      } else {
        return dfs(startIdx, depth + 1);
      }
    }
  };

  // call dfs
  const MSG_LENGTH = msg.length;
  for (let i = 0; i < MSG_LENGTH; ) {
    let depth = dfs(i, 1);
    i += depth;
  }

  return answer;
}

solution("KAKAO"); // [11, 1, 27, 15]
solution("TOBEORNOTTOBEORTOBEORNOT"); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
