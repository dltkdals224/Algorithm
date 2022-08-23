// 2022.08.23
function solution(string) {
  const PROCESSED_STRING = string.toLowerCase().replace(/[^a-z$]/g, "s");

  if (PROCESSED_STRING.split("").reverse().join("") === PROCESSED_STRING) {
    return "YES";
  }
  if (PROCESSED_STRING.split("").reverse().join("") !== PROCESSED_STRING) {
    return "NO";
  }
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
console.log(solution("hello, my name is 23dl"));
