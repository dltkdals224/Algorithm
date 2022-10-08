// 2022. 08. 21
function solution(fees, records) {
  const obj = {};
  records.forEach((v) => {
    obj[String(v.split(" ")[1])] = [];
  });
  records.forEach((v) => {
    obj[String(v.split(" ")[1])].push(`${v.split(" ")[0]} ${v.split(" ")[2]}`);
  });

  const newObj = Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => {
      return a < b ? -1 : 1;
    })
  );

  let answer = [];
  return answer;
}

const calculateTime = (obj) => {
  const returnObj = {};

  Object.values(obj).map((v) => {
    if (v[0].split(" ")[0] === "out") {
      v.shift();
    }
    if (v.length % 2 === 1) {
      v.push("23:59 OUT");
    }
  });

  Object.values(obj).map((v, i) => {
    let tmp = 0;
    for (let i = 0; i < v.length; i += 2) {
      tmp += (v[i + 1].slice(0, 2) - v[i].slice(0, 2)) * 60;
      tmp += v[i + 1].slice(3, 5) - v[i].slice(3, 5);
    }

    returnObj[i] = tmp;
  });
};

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);
// [14600, 34400, 5000]

// solution(
//   [120, 0, 60, 591],
//   [
//     "16:00 3961 IN",
//     "16:00 0202 IN",
//     "18:00 3961 OUT",
//     "18:00 0202 OUT",
//     "23:58 3961 IN",
//   ]
// );
// [0, 591]
