function createQueryString(object) {
  const KEY_LENGTH = Object.keys(object).length;
  let ANS = "";

  // console.log(KEY_LENGTH);
  if (KEY_LENGTH === 0) {
    return "";
  }

  for (let i = 0; i < KEY_LENGTH; i++) {
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
      const NEW_STRING = Object.values(object)[i].replace(/ /g, "%20");
      ANS += `&${Object.keys(object)[i]}=${NEW_STRING}`;
    }
  }

  console.log(ANS.replace("&", "?"));
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
