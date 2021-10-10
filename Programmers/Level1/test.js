const test = ["a", "b", "c", "d", "f", "a", "b", "b"];

let ans = [];

let idx = test.indexOf("b");
while (idx != -1) {
  ans.push(idx);
  idx = test.indexOf("b", idx + 1);
}

console.log(ans);
