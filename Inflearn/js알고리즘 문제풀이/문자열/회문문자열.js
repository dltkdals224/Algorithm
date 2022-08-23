// 2022.08.23
function solution(string) {
  if (
    string.toLowerCase().split("").reverse().join("") === string.toLowerCase()
  ) {
    return "YES";
  }
  if (
    string.toLowerCase().split("").reverse().join("") !== string.toLowerCase()
  ) {
    return "NO";
  }
}

console.log(solution("goooG"));
console.log(solution("hello"));
