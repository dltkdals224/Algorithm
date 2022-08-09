function getStylesOf(element, styles) {
  /* 작성해주세요 */

  return {};
}

/* solution 함수는 수정하지 마세요. */
function solution(_element, _styles) {
  const element = JSON.parse(_element);
  const styles = JSON.parse(_styles);

  const result = getStylesOf(element, styles);

  return JSON.stringify(result, Object.keys(result).sort());
}
