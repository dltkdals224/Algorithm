//2021.10.11
function solution(sizes) {
  let ans = 0;
  let tmp = 0;
  let changeAns1 = 9999;
  let changeAns2 = 9999;

  let widthTmp = [];
  let heightTmp = [];

  for (let n = 0; n < sizes.length; n++) {
    widthTmp.push(sizes[n][0]);
    heightTmp.push(sizes[n][1]);
  }

  // console.log(widthTmp);
  // console.log(heightTmp);

  function changeIndex1() {
    let widthMax = Math.max(...widthTmp);
    let heightMax = Math.max(...heightTmp);
    ans = widthMax * heightMax;
    let widthMaxIndex = [];
    let heightMaxIndex = [];

    widthTmp.filter((elem, index) => {
      if (elem == widthMax) {
        widthMaxIndex.push(index);
      }
    });
    heightTmp.filter((elem, index) => {
      if (elem == heightMax) {
        heightMaxIndex.push(index);
      }
    });

    for (let n = 0; n < widthMaxIndex.length; n++) {
      tmp = widthTmp[widthMaxIndex[n]];
      widthTmp.splice(widthMaxIndex[n], 1, heightTmp[n]);
      heightTmp.splice(widthMaxIndex[n], 1, tmp);
    }
    // console.log(widthTmp);
    // console.log(heightTmp);
    changeAns1 = Math.max(...widthTmp) * Math.max(...heightTmp);
    if (changeAns1 < ans) {
      changeIndex1();
    } else {
      widthTmp = [];
      heightTmp = [];

      for (let n = 0; n < sizes.length; n++) {
        widthTmp.push(sizes[n][0]);
        heightTmp.push(sizes[n][1]);
      }
    }
  }

  //

  function changeIndex2() {
    let widthMax = Math.max(...widthTmp);
    let heightMax = Math.max(...heightTmp);
    ans = widthMax * heightMax;
    let widthMaxIndex = [];
    let heightMaxIndex = [];

    widthTmp.filter((elem, index) => {
      if (elem == widthMax) {
        widthMaxIndex.push(index);
      }
    });
    heightTmp.filter((elem, index) => {
      if (elem == heightMax) {
        heightMaxIndex.push(index);
      }
    });

    for (let n = 0; n < heightMaxIndex.length; n++) {
      tmp = heightTmp[heightMaxIndex[n]];
      heightTmp.splice(heightMaxIndex[n], 1, widthTmp[n]);
      widthTmp.splice(heightMaxIndex[n], 1, tmp);
    }
    // console.log(widthTmp);
    // console.log(heightTmp);
    changeAns2 = Math.max(...widthTmp) * Math.max(...heightTmp);
    if (changeAns2 < ans) {
      changeIndex2();
    } else {
      widthTmp = [];
      heightTmp = [];

      for (let n = 0; n < sizes.length; n++) {
        widthTmp.push(sizes[n][0]);
        heightTmp.push(sizes[n][1]);
      }
    }
  }

  changeIndex1();
  changeIndex2();
  //3개중 최솟값이 답
  console.log(ans);
  console.log(changeAns1);
  console.log(changeAns2);
  ans = Math.min(ans, changeAns1, changeAns2);
  console.log(ans);
  return ans;
}

solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);

solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
