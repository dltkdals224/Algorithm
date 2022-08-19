function getStylesOf(element, styles) {
  /* 작성해주세요 */
  // 문제의 일부가 유실되어 풀이 진행 불가능.

  return {};
}

/* solution 함수는 수정하지 마세요. */
function solution(_element, _styles) {
  const element = JSON.parse(_element);
  const styles = JSON.parse(_styles);

  const result = getStylesOf(element, styles);

  return JSON.stringify(result, Object.keys(result).sort());
}
