//2021.09.21
function solution(answers) {
  let ans = [];
  let cor = [];
  let stu1 = [];
  let stu2 = [];
  let stu3 = [];

  //1번
  for (let n = 0; n < answers.length; n++) {
    stu1[n] = (n % 5) + 1;
  }
  //2번
  for (let n = 0; n < answers.length; n++) {
    if (n % 2 == 0) {
      stu2[n] = 2;
    } else {
      switch (n % 8) {
        case 1:
          stu2[n] = 1;
          break;
        case 3:
          stu2[n] = 3;
          break;
        case 5:
          stu2[n] = 4;
          break;
        case 7:
          stu2[n] = 5;
          break;
        default:
          break;
      }
    }
  }
  //3번
  for (let n = 0; n < answers.length; n++) {
    switch (n % 10) {
      case 0:
        stu3[n] = 3;
        if (n + 1 < answers.length) stu3[n + 1] = 3;
        break;
      case 2:
        stu3[n] = 1;
        if (n + 1 < answers.length) stu3[n + 1] = 1;
        break;
      case 4:
        stu3[n] = 2;
        if (n + 1 < answers.length) stu3[n + 1] = 2;
        break;
      case 6:
        stu3[n] = 4;
        if (n + 1 < answers.length) stu3[n + 1] = 4;
        break;
      case 8:
        stu3[n] = 5;
        if (n + 1 < answers.length) stu3[n + 1] = 5;
        break;
      default:
        break;
    }
  }

  //정답과 비교
  function compareAns(stu) {
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == stu[i]) correct++;
    }
    return correct;
  }

  cor[0] = compareAns(stu1);
  cor[1] = compareAns(stu2);
  cor[2] = compareAns(stu3);

  for (let n = 0; n <= 2; n++) {
    if (cor[n] == Math.max(cor[0], cor[1], cor[2])) {
      ans.push(n + 1);
    }
  }

  return ans;
}

//다른 풀이
/*
function solution(answers) {
    var answer = [];
    var user = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    var point = [0,0,0]

    for(var i=0; i<answers.length; i++) {
        if(user[0][i%5] == answers[i]) {
            point[0]++;
        }
        if(user[1][i%8] == answers[i]) {
            point[1]++;
        }
        if(user[2][i%10] == answers[i]) {
            point[2]++;
        }
    }

    var max = Math.max.apply(null, point);

    for(var i=0; i<3; i++) {
        if(point[i] == max)
            answer.push(i+1);
    }

    return answer;
}
*/
