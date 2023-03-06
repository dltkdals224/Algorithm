// 2023.03.06
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let Nth = graph.length - 1;
  let ans = [];

  // 비순환 그래프이기 때문에 dfs도 괜찮음.
  (function dfs(idx, stack) {
    let count = 0;

    while (count !== graph[idx].length) {
      const TARGET = graph[idx][count];
      count++;

      if (TARGET === Nth) {
        ans.push([...stack, TARGET]);
      } else {
        dfs(TARGET, [...stack, TARGET]);
      }
    }
  })(0, [0]);

  return ans;
};

allPathsSourceTarget([[1, 2], [3], [3], []]);
allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]);
