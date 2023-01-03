// 2023.01.03
function solution(fees, records) {
  let answer = [];
  const PARKING_OBJ = {};
  const CAR_FEE_OBJ = {};

  records.forEach((string) => {
    const [TIME, CAR_NUMBER, TYPE] = string.split(" ");

    if (TYPE === "IN") {
      PARKING_OBJ[CAR_NUMBER] =
        (PARKING_OBJ[CAR_NUMBER] || 0) + translateTime(TIME);
    }
    if (TYPE === "OUT") {
      CAR_FEE_OBJ[CAR_NUMBER] =
        (CAR_FEE_OBJ[CAR_NUMBER] || 0) +
        (translateTime(TIME) - PARKING_OBJ[CAR_NUMBER]);

      delete PARKING_OBJ[CAR_NUMBER];
    }
  });

  Object.entries(PARKING_OBJ).forEach((arr) => {
    CAR_FEE_OBJ[arr[0]] =
      (CAR_FEE_OBJ[arr[0]] || 0) + (translateTime("23:59") - arr[1]);

    delete PARKING_OBJ[arr[0]];
  });

  Object.entries(CAR_FEE_OBJ)
    .sort(([a], [b]) => {
      return Number(a) - Number(b);
    })
    .forEach((arr) => {
      answer.push(calculateFee(fees, arr[1]));
    });

  return answer;
}

const translateTime = (string) => {
  const [HOURS, MINUATES] = string.split(":");

  return Number(HOURS) * 60 + Number(MINUATES);
};

const calculateFee = (fees, time) => {
  if (time <= fees[0]) {
    return fees[1];
  } else {
    const ADDTIONAL_MIN = time - fees[0];
    return fees[1] + Math.ceil(ADDTIONAL_MIN / fees[2]) * fees[3];
  }
};

// solution(
//   [180, 5000, 10, 600],
//   [
//     "05:34 5961 IN",
//     "06:00 0000 IN",
//     "06:34 0000 OUT",
//     "07:59 5961 OUT",
//     "07:59 0148 IN",
//     "18:59 0000 IN",
//     "19:09 0148 OUT",
//     "22:59 5961 IN",
//     "23:00 5961 OUT",
//   ]
// ); // [14600, 34400, 5000]

// solution(
//   [120, 0, 60, 591],
//   [
//     "16:00 3961 IN",
//     "16:00 0202 IN",
//     "18:00 3961 OUT",
//     "18:00 0202 OUT",
//     "23:58 3961 IN",
//   ]
// ); // [0, 591]
