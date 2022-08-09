function createQueryString(object) {
  const KEY_LENGTH = Object.keys(object).length;
  let ANS = "?";

  const endPoint = (string) => {
    return string.length === 1 ? "" : string.slice(0, -1);
  };

  for (const property in object) {
    console.log(typeof object[property]);
    ANS += `${property}=${object[property]}&`;
  }
  console.log(ANS);
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
