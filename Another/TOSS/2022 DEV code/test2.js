function createQueryString(object) {
  const KEY_LENGTH = Object.keys(object).length;
  let ANS = "";

  if (KEY_LENGTH === 0) {
    return "";
  }

  for (let i = 0; i < KEY_LENGTH; i++) {
    // 핵심
    // 객체 내 인자 종류에 따라 적적한 queryString을 갖출 수 있도록 한다.
    if (
      Object.values(object)[i] === undefined ||
      Object.values(object)[i] === null
    ) {
      ANS += "";
      continue;
    }

    if (typeof Object.values(object)[i] === "object") {
      Object.values(object)[i].forEach((v) => {
        ANS += `&${Object.keys(object)[i]}=${v}`;
      });
    }

    if (typeof Object.values(object)[i] == "boolean") {
      ANS += `&${Object.keys(object)[i]}=${Object.values(object)[i]}`;
    }

    if (typeof Object.values(object)[i] == "string") {
      // 목적 인자에 대한 전체 replace는 정규식 /~/g를 통해 구현한다.
      // 특수문자는 역슬래시(\)를 섞어 사용한다.
      const NEW_STRING = Object.values(object)[i].replace(/ /g, "%20");
      ANS += `&${Object.keys(object)[i]}=${NEW_STRING}`;
    }
  }

  return ANS.replace("&", "?");
}

function solution(input) {
  var object = JSON.parse(input);
  var answer = createQueryString(object);
  return answer;
}

createQueryString({}); // ''
createQueryString({ foo: "bar" }); // '?foo=bar'
createQueryString({ foo: "bar", enable: true }); // '?foo=bar&enable=true'

createQueryString({ foo: [1, 2, 3] }); // '?foo=1&foo=2&foo=3'
createQueryString({ foo: "this is test" }); // '?foo=this%20is%20test'
createQueryString({ foo: "1", bar: null, baz: undefined, quux: "foo" }); // '?foo=1&quux=foo'
