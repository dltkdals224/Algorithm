const exclude = ",";

function solution(text, keyword) {
  const POSSIBILITY = keyword.length + 1;
  let html = "";

  for (let i = 0; i < POSSIBILITY; i++) {
    let TARGET_KEYWORD = "";
    if (i === 0 || i === POSSIBILITY - 1) {
      TARGET_KEYWORD = keyword;
    } else {
      TARGET_KEYWORD = keyword.slice(0, i) + "," + keyword.slice(i);
    }

    // 동적 인자에 대한 replace 처리 방법
    const regex = new RegExp(`${TARGET_KEYWORD}`);

    if (text.includes(TARGET_KEYWORD)) {
      html = text.replace(regex, `<mark>${TARGET_KEYWORD}</mark>`);
      break;
    }
  }

  return html;
}

solution("커피 3,500원", "350");
// '커피 <mark>3,50</mark>0원'

solution("샌드위치 2,350원", "350");
// // '샌드위치 2,<mark>350</mark>원'

solution("핫도그 350,000원", "350");
// // '샌드위치 2,<mark>350</mark>원'
