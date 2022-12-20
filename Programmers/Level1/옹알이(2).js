function solution(babbling) {
  let answer = 0;
  const CAN_BABBLING_WORDS = ["aya", "ye", "woo", "ma"];

  babbling.forEach((word) => {
    const TARGET_BABBLING = word.split("");

    let recentWord = "";
    let targetWord = "";

    TARGET_BABBLING.forEach((alphabet) => {
      targetWord += alphabet;
      if (
        CAN_BABBLING_WORDS.includes(targetWord) &&
        recentWord !== targetWord
      ) {
        recentWord = targetWord;
        targetWord = "";
      }
    });
    if (targetWord.length === 0) {
      answer++;
    }
  });

  return answer;
}

solution(["aya", "yee", "u", "maa"]); // 1
solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]); // 2
