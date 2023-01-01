// MAP
const byMAP = (arr1, arr2) => {
  const TARGET_MAP1 = new Map();
  arr1.forEach((val) => {
    TARGET_MAP1.set(val, (TARGET_MAP1.get(val) || 0) + 1);
  });

  const TARGET_MAP2 = new Map();
  arr2.forEach((val) => {
    TARGET_MAP2.set(val, (TARGET_MAP2.get(val) || 0) + 1);
  });

  let intersection = 0;
  for (let target of TARGET_MAP1.keys()) {
    intersection += Math.min(
      TARGET_MAP1.get(target) ?? 0,
      TARGET_MAP2.get(target) ?? 0
    );
  }

  console.log(intersection, arr1.length + arr2.length - intersection);
};

// SET
const bySET = (arr1, arr2) => {
  const TARGET_SET = new Set([...arr1, ...arr2]);

  let union = 0;
  let intersection = 0;

  TARGET_SET.forEach((val) => {
    const has1 = arr1.filter((x) => x === val).length;
    const has2 = arr2.filter((x) => x === val).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  console.log(intersection, union);
};

byMAP(["a", "b", "c"], ["d", "e", "f"]); // 0, 6
byMAP(["a", "b", "c"], ["c", "d", "e"]); // 1, 5
byMAP(["a", "a", "b"], ["b", "b", "a"]); // 2, 4
byMAP(["a", "a", "b", "b"], ["b", "b", "a", "c"]); // 3, 5
byMAP(["a", "a"], ["a", "a", "a"]); // 2, 3

console.log("///");

bySET(["a", "b", "c"], ["d", "e", "f"]); // 0, 6
bySET(["a", "b", "c"], ["c", "d", "e"]); // 1, 5
bySET(["a", "a", "b"], ["b", "b", "a"]); // 2, 4
bySET(["a", "a", "b", "b"], ["b", "b", "a", "c"]); // 3, 5
bySET(["a", "a"], ["a", "a", "a"]); // 2, 3
