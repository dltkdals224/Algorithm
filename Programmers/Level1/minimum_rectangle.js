//2021.10.11
// function solution(sizes) {
//   let ans = 0;
//   let preAns1 = -1;
//   let preAns2 = -1;

//   let widthTmp = [];
//   let heightTmp = [];

//   for (let n = 0; n < sizes.length; n++) {
//     widthTmp.push(sizes[n][0]);
//     heightTmp.push(sizes[n][1]);
//   }

//   //   console.log(widthTmp);
//   //   console.log(heightTmp);

//   let widthMax = Math.max(...widthTmp);
//   let heightMax = Math.max(...heightTmp);
//   ans = widthMax * heightMax;

//   let widthMaxIndex = [];
//   widthTmp.filter((elem, index) => {
//     if (elem == widthMax) {
//       widthMaxIndex.push(index);
//     }
//   });
//   let heightMaxIndex = [];
//   heightTmp.filter((elem, index) => {
//     if (elem == heightMax) {
//       heightMaxIndex.push(index);
//     }
//   });
//   console.log(widthMaxIndex);
//   console.log(heightMaxIndex);

//   //최댓값 인덱스끼리 바꿔보기
//   let tmp = 0;
//   let tmpIndex = 0;
//   let tmpArr = [];
//   if (widthMaxIndex.length == 1) {
//     tmp = widthTmp[widthMaxIndex];
//     widthTmp[widthMaxIndex] = heightTmp[widthMaxIndex];
//     heightTmp[widthMaxIndex] = tmp;

//     // console.log(widthTmp);

//     widthMax = Math.max(...widthTmp);
//     heightMax = Math.max(...heightTmp);

//     preAns1 = widthMax * heightMax;
//     tmp = widthTmp[widthMaxIndex];
//     widthTmp[widthMaxIndex] = heightTmp[widthMaxIndex];
//     heightTmp[widthMaxIndex] = tmp;

//     // console.log(widthTmp);
//   } else {
//     for (let n = 0; n < widthMaxIndex.length; n++)
//       heightTmp.filter((elem, index) => {
//         if (index == widthMaxIndex[n]) {
//           tmpArr.push(elem);
//         }
//       });
//     tmp = Math.min(tmpArr);
//     heightTmp.filter((elem, index) => {
//       if (index == widthMaxIndex && tmp == elem) {
//         console.log("hi");
//       }
//     });
//   }

//   if (heightMaxIndex.length == 1) {
//     tmp = heightTmp[heightMaxIndex];
//     heightTmp[heightMaxIndex] = widthTmp[heightMaxIndex];
//     widthTmp[heightMaxIndex] = tmp;

//     console.log(heightTmp);

//     widthMax = Math.max(...widthTmp);
//     heightMax = Math.max(...heightTmp);

//     preAns2 = widthMax * heightMax;
//     tmp = heightTmp[heightMaxIndex];
//     heightTmp[heightMaxIndex] = widthTmp[heightMaxIndex];
//     widthTmp[heightMaxIndex] = tmp;

//     console.log(heightTmp);
//   } else {
//     for (let n = 0; n < heightMaxIndex.length; n++)
//       widthTmp.filter((elem, index) => {
//         if (index == heightMaxIndex[n]) {
//           tmpArr.push(elem);
//         }
//       });
//     tmp = Math.min(...tmpArr);
//     for (let n = 0; n < heightMaxIndex.length; n++)
//       widthTmp.filter((elem, index) => {
//         if (index == heightMaxIndex[n] && elem == tmp) {
//           tmpIndex = index;
//         }
//       });
//     tmp = heightTmp[tmpIndex];
//     heightTmp[tmpIndex] = widthTmp[tmpIndex];
//     widthTmp[tmpIndex] = tmp;

//     console.log(heightTmp);

//     widthMax = Math.max(...widthTmp);
//     heightMax = Math.max(...heightTmp);
//     console.log(widthMax);
//     console.log(heightMax);

//     preAns2 = widthMax * heightMax;
//     tmp = heightTmp[tmpIndex];
//     heightTmp[tmpIndex] = widthTmp[tmpIndex];
//     widthTmp[tmpIndex] = tmp;

//     console.log(heightTmp);
//   }

//   //답안 정렬
//   console.log(preAns2);
//   ans = Math.min(ans, preAns1, preAns2);
//   console.log(ans);
//   return ans;
// }

// solution([
//   [60, 50],
//   [30, 70],
//   [50, 30],
//   [80, 40],
// ]);

solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);
