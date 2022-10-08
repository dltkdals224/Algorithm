// 2021.11.24
function solution(s) {
  let tmpNum = [];
  let repeatNum = 0;
  let addOne = 0;
  let deleteZero = 0;
  let lengthTmp = s.length;

  tmpNum = s.split("");

  while (tmpNum != 1) {
    for (let n = 0; n < lengthTmp; n++) {
      tmpNum[n] === "1" ? addOne++ : deleteZero++;
    }
    tmpNum = addOne.toString(2);
    lengthTmp = tmpNum.length;
    addOne = 0;
    repeatNum++;
  }

  return [repeatNum, deleteZero];
}
