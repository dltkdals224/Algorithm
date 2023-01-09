// 2023.01.09
function solution(files) {
  const TARGET_FILES = files.map((string, idx) => {
    const CHECKED_1 = string.replace(/[0-9]/, "\\");
    const TARGET_IDX_1 = CHECKED_1.indexOf("\\");

    const CHECKED_2 = CHECKED_1.substring(TARGET_IDX_1 + 1).replace(
      /[^0-9]/,
      "\\"
    );

    const TARGET_IDX_2 =
      CHECKED_2.indexOf("\\") === -1
        ? TARGET_IDX_1 + CHECKED_2.length + 1
        : TARGET_IDX_1 + CHECKED_2.indexOf("\\") + 1;

    return [
      string.slice(0, TARGET_IDX_1),
      string.slice(TARGET_IDX_1, TARGET_IDX_2).length < 5
        ? string.slice(TARGET_IDX_1, TARGET_IDX_2)
        : string.slice(TARGET_IDX_1, TARGET_IDX_1 + 5),
      string.slice(TARGET_IDX_1, TARGET_IDX_2).length < 5
        ? string.slice(TARGET_IDX_2)
        : string.slice(TARGET_IDX_1 + 5),
      idx,
    ];
  });

  TARGET_FILES.sort((a, b) => {
    if (a[0].toUpperCase() !== b[0].toUpperCase()) {
      return a[0].toUpperCase().localeCompare(b[0].toUpperCase());
    }
    if (a[1].replace(/(^0+)/, "") !== b[1].replace(/(^0+)/, "")) {
      return a[1] - b[1];
    }
    return a[3] - b[3];
  });

  const ans = TARGET_FILES.map((arr) => {
    arr.pop();
    return arr.join("");
  });

  return ans;
}

// solution([
//   "img12.png",
//   "img10.png",
//   "img02.png",
//   "img1.png",
//   "IMG01.GIF",
//   "img2.JPG",
// ]);
// ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

// solution([
//   "F-5 Freedom Fighter",
//   "B-50 Superfortress",
//   "A-10 Thunderbolt II",
//   "F-14 Tomcat",
// ]);
// // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

// solution([
//   "ABC00001first",
//   "abc00001second",
//   "aab00001",
//   "aab000001",
//   "T T2",
//   "TT1",
// ]);
// ["aab000001", "aab00001", "abc00001first", "abc00001second"]
