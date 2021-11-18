//2021.11.19
function solution(skill, skill_trees) {
  let ans = 0;
  let ansArr = [];
  let ansString = "";

  let arr = skill.split("");
  console.log(arr);

  for (let n = 0; n < skill_trees.length; n++) {
    let skill_trees_arr = skill_trees[n].split("");
    ansArr = skill_trees_arr.map((elem) => {
      if (arr.includes(`${elem}`)) {
        return elem;
      } else;
    });
    for (let m = 0; m < ansArr.length; m++) {
      if (ansArr[m] === undefined) {
        ansArr.splice(m, 1);
        m = -1;
      }
    }

    ansString = ansArr.join("");
    console.log(ansString);
    if (skill.includes(ansString) && ansString[0] === skill[0]) {
      ans++;
    }
  }

  console.log(ans);
  return ans;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA", "QWERTUCVBPD", "ABDC"]);
console.log("//");
solution("Z", ["ZKDRTA", "ZFPWA", "ZK", "RTA", "EZKTRA"]);
