function solution(compressed) {
  let tmp = 0;
  const compressedArr = compressed.split("");
  compressedArr.map((v) => {
    if (v === "(") {
      tmp++;
    }
  });

  for (let i = 0; i < tmp; i++) {
    let startPoint = 0;
    let numLength = 0;
    for (let j = 0; j < compressedArr.length; j++) {
      if (compressedArr[j] === "(") {
        startPoint = j;
        numLength = 0;

        for (let t = 1; ; t++) {
          if (isNaN(compressedArr[j - t]) === false) {
            numLength++;
          } else {
            break;
          }
        }
      }
      if (compressedArr[j] === ")") {
        const test = compressedArr.splice(
          startPoint - numLength,
          j - startPoint + numLength + 1
        );

        const targetTime = Number(test.splice(0, test.indexOf("(")).join(""));
        const targetString = test
          .splice(1, test.length - test.indexOf("(") - 2)
          .join("");

        let ansString = "";
        for (let k = 0; k < targetTime; k++) {
          ansString += targetString;
        }

        compressedArr.splice(startPoint - numLength, 0, ansString);
        j = 0;
        continue;
      }
    }
  }

  return compressedArr.join("");
}

solution("10(p)");
solution("2(3(hi)co)"); // hihihicohihihico
solution("2(2(hi)2(co))x2(bo)"); // hihicocohihicocoxbobo
