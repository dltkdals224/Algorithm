//2021.10.07
function solution(new_id) {
  //step1
  new_id = new_id.toLowerCase();
  console.log(new_id);

  //step2
  for (let n = 0; n < new_id.length; n++) {
    if (
      (new_id.charCodeAt(n) >= 48 && new_id.charCodeAt(n) <= 57) ||
      (new_id.charCodeAt(n) >= 97 && new_id.charCodeAt(n) <= 122) ||
      new_id.charCodeAt(n) == 45 ||
      new_id.charCodeAt(n) == 95 ||
      new_id.charCodeAt(n) == 46
    )
      continue;
    else new_id = new_id.slice(0, n) + new_id.slice(n + 1);
    n--;
  }
  console.log(new_id);

  //step3
  new_id = new_id.split("");
  for (let n = 0; n < new_id.length; n++) {
    if (new_id[n] == "." && new_id[n + 1] == ".") {
      new_id.splice(n, 1);
      n--;
    } else continue;
  }
  new_id = new_id.join("");
  console.log(new_id);

  //step4
  new_id = new_id.split("");
  if (new_id[0] == ".") new_id.splice(0, 1);
  if (new_id[new_id.length - 1] == ".") new_id.splice(new_id.length - 1, 1);
  new_id = new_id.join("");
  console.log(new_id);

  //step5
  if (new_id == "") new_id = "a";
  else;
  console.log(new_id);

  //step6
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  //
  new_id = new_id.split("");
  if (new_id[0] == ".") new_id.splice(0, 1);
  if (new_id[new_id.length - 1] == ".") new_id.splice(new_id.length - 1, 1);
  new_id = new_id.join("");
  console.log(new_id);

  //step7
  new_id = new_id.split("");
  if (new_id.length == 1) {
    new_id.push(new_id[0]);
    new_id.push(new_id[0]);
  }
  if (new_id.length == 2) new_id.push(new_id[1]);
  new_id = new_id.join("");
  console.log(new_id);

  return new_id;
}

//후기
//여러번 하지 말고 처음에 split, 마지막에 join을 하는게 나았을 듯.
//정규식 풀이법 참고할 것.

//다른 풀이법
/*
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
*/
