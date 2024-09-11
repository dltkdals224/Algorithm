var holidays = ["0216", "0301"];
var lessons = [
  {
    name: "학생1",
    days: "월금",
    lessonHour: 11,
    dates: ["0116", "0120", "0123", "0127", "0130", "0203", "0206", "0210"],
  },
  {
    name: "학생2",
    days: "월금",
    lessonHour: 12,
    dates: [
      "0113",
      "0116",
      "0120",
      "0123",
      "0127",
      "0130",
      "0203",
      "0206",
      "0210",
      "0213",
      "0217",
      "0220",
      "0224",
      "0227",
      "0303",
      "0306",
    ],
  },
  {
    name: "학생3",
    days: "월금",
    lessonHour: 15,
    dates: ["0116", "0120", "0123", "0127", "0130", "0203", "0206", "0210"],
  },
  {
    name: "학생4",
    days: "화목",
    lessonHour: 15,
    dates: ["0117", "0119", "0124", "0127", "0131", "0202", "0207", "0209"],
  },
  {
    name: "학생5",
    days: "화목",
    lessonHour: 14,
    dates: ["0110", "0112", "0117", "0119", "0124", "0126", "0131", "0202"],
  },
  {
    name: "학생6",
    days: "수금",
    lessonHour: 13,
    dates: [
      "0113",
      "0118",
      "0120",
      "0125",
      "0127",
      "0201",
      "0203",
      "0208",
      "0210",
      "0215",
      "0217",
      "0222",
      "0224",
      "0303",
      "0308",
      "0310",
    ],
  },
  {
    name: "학생7",
    days: "수",
    lessonHour: 13,
    dates: ["0118", "0125", "0201", "0208", "0210", "0215", "0217", "0222"],
  },
  {
    name: "학생8",
    days: "수금",
    lessonHour: 14,
    dates: ["0110", "0113", "0117", "0120", "0124", "0127", "0131", "0203"],
  },
  {
    name: "학생9",
    days: "화",
    lessonHour: 11,
    dates: ["0207", "0214", "0221", "0307"],
  },
];

function getLessonDates(days, lessonHour, startDate) {
  let answer = [];
  const DATE = new Date("2023-02-08");

  const TIME_TABLE = {};
  lessons.forEach((obj) => {
    obj.days.split("").forEach((day) => {
      const target = DAY_TO_NUM[day];

      if (
        Number(obj.dates[obj.dates.length - 1].substring(0, 2)) <=
          DATE.getMonth() + 1 &&
        Number(obj.dates[obj.dates.length - 1].substring(2, 4)) < DATE.getDate()
      ) {
        return;
      } else {
        if (TIME_TABLE[target] === undefined) {
          TIME_TABLE[target] = [obj.lessonHour];
        } else {
          TIME_TABLE[target] = [...TIME_TABLE[target], obj.lessonHour];
        }
      }
    });
  });

  // 레슨 시간 당위성 확인
  if (lessonHour < 11 || lessonHour > 16) {
    console.log("레슨이 가능한 시간이 아닙니다. 입력한 시간을 확인 해주세요.");
    return [];
  }

  // 중복 일정 확인
  for (let i = 0; i < days.length; i++) {
    if (TIME_TABLE[DAY_TO_NUM[days.split("")[i]]].includes(lessonHour)) {
      console.log("중복 일정이 존재합니다. TIME_TABLE 확인 부탁드립니다.");
      return [];
    }
  }

  // 일정 출력
  const RETURN_DATE_ARR = [];
  function getNextDates(startDate) {
    const dates = [];
    let currentDate = new Date(startDate);

    while (dates.length < 4) {
      if (dates.length === 0) {
        currentDate.setDate(currentDate.getDate());
      } else {
        currentDate.setDate(currentDate.getDate() + 7);
      }

      if (currentDate.getMonth() !== currentDate.getMonth()) {
        currentDate.setDate(1);
        currentDate.setMonth(currentDate.getMonth() + 1);
      }

      const TARGET_DATE = new Date(currentDate);

      dates.push(
        `${String(TARGET_DATE.getMonth() + 1).padStart(2, "0")}${String(
          TARGET_DATE.getDate()
        ).padStart(2, "0")}`
      );
    }

    RETURN_DATE_ARR.push(...dates);
  }

  if (days.length === 1) {
    getNextDates(
      `2023-${startDate.substring(0, 2)}-${startDate.substring(2, 4)}`
    );
  }
  if (days.length === 2) {
    const DAY_DIF =
      DAY_TO_NUM[days.split("")[1]] - DAY_TO_NUM[days.split("")[0]];

    getNextDates(
      `2023-${startDate.substring(0, 2)}-${startDate.substring(2, 4)}`
    );
    getNextDates(
      `2023-${startDate.substring(0, 2)}-${
        Number(startDate.substring(2, 4)) + DAY_DIF
      }`
    );
  }

  // 일정 수정
  RETURN_DATE_ARR.sort();

  const DELETE_TARGET_IDX = [];
  RETURN_DATE_ARR.forEach((day, idx) => {
    if (holidays.includes(day)) {
      DELETE_TARGET_IDX.push(idx);
    }
  });

  DELETE_TARGET_IDX.forEach((idx) => {
    RETURN_DATE_ARR.splice(idx, 1);
  });

  return RETURN_DATE_ARR;
}

const DAY_TO_NUM = {
  일: 0,
  월: 1,
  화: 2,
  수: 3,
  목: 4,
  금: 5,
  토: 6,
};

var answer1 = getLessonDates("월수", 14, "0213");
console.log(answer1);
// 출력값: ["0213", "0215", "0220", "0222", "0227", "0306", "0308", "0313"]

// var answer2 = getLessonDates("화목", 13, "0214");
// console.log(answer2);
// // 출력값: ["0214", "0221", "0223", "0228", "0302", "0307", "0309","0314"]

// var answer3 = getLessonDates("수목", 11, "0215");
// console.log(answer3);
// // 출력값: ["0215", "0222", "0223", "0302", "0308", "0309","0315", "0316"]

// var answer4 = getLessonDates("수", 22, "0210");
// console.log(answer4);
// 출력값: []

// var answer5 = getLessonDates("화", 15, "0214");
// console.log(answer5);
// 출력값: []

// var answer6 = getLessonDates("화수", 11, "0214");
// console.log(answer6);
// 출력값: []

// var answer7 = getLessonDates("수", 13, "0210");
// console.log(answer7);
// 출력값: []
