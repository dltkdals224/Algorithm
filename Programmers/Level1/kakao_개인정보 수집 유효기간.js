// 2023.01.10
function solution(today, terms, privacies) {
  let answer = [];

  const [TODAY_YEAR, TODAY_MONTH, TODAY_DAY] = today.split(".");
  const TODAY_DATE_VALUE =
    (Number(TODAY_YEAR) - 2000) * 12 * 28 +
    Number(TODAY_MONTH) * 28 +
    Number(TODAY_DAY);

  // term
  const TERM_OBJ = {};
  terms.forEach((string) => {
    const [TYPE, TERM] = string.split(" ");

    TERM_OBJ[TYPE] = TERM * 28;
  });

  // pravacies
  privacies.forEach((string, idx) => {
    const [TARGET_DATE, TARGET_TERM] = string.split(" ");
    const [TARGET_YEAR, TARGET_MONTH, TARGET_DAY] = TARGET_DATE.split(".");

    const TARGET_DATE_VALUE =
      (Number(TARGET_YEAR) - 2000) * 12 * 28 +
      Number(TARGET_MONTH) * 28 +
      Number(TARGET_DAY);

    if (TARGET_DATE_VALUE + TERM_OBJ[TARGET_TERM] <= TODAY_DATE_VALUE) {
      answer.push(idx + 1);
    }
  });

  return answer;
}

// solution(
//   "2022.05.19",
//   ["A 6", "B 12", "C 3"],
//   ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
// ); // [1, 3]

// solution(
//   "2020.01.01",
//   ["Z 3", "D 5"],
//   [
//     "2019.01.01 D",
//     "2019.11.15 Z",
//     "2019.08.02 D",
//     "2019.07.01 D",
//     "2018.12.28 Z",
//   ]
// ); // [1, 4, 5]
