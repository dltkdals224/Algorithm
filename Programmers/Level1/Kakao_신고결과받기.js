// 2022.05.06
function solution(id_list, report, k) {
  let answer = [];

  const uniqueArr = report.filter((element, index) => {
    return report.indexOf(element) === index;
  });

  const test = uniqueArr.map((v, i) => {
    return v.split(" ");
  });

  const reportObj = numberOfReports(id_list, test);
  const reportedPerson = checkReport(reportObj, k);
  return sendMail(id_list, test, reportedPerson);
}

const numberOfReports = (id_list, reported) => {
  const NUMBER_OF_USERS = id_list.length;
  const NUMBER_OF_REPORTED_PERSON = reported.length;

  let obj = new Object();

  id_list.forEach(function (item, index) {
    obj[id_list[index]] = 0;
  });

  for (let i = 0; i < NUMBER_OF_REPORTED_PERSON; i++) {
    obj[reported[i][1]]++;
  }

  return obj;
};

// 범법자 색출 ㅋㅋ
const checkReport = (obj, k) => {
  const TOTAL_PERSON = Object.keys(obj).length;
  let returnArray = [];

  for (let i = 0; i < TOTAL_PERSON; i++) {
    if (Object.values(obj)[i] >= k) {
      returnArray.push(Object.keys(obj)[i]);
    }
  }

  return returnArray;
};

// 당첨자에게 메일 발송 ㅋㅋ
const sendMail = (id_list, test, reportedPerson) => {
  const TOTAL_PERSON = id_list.length;
  const REPORTED_PERSON = test.length;

  const createZeroArray = (len) => {
    return new Array(len).fill(0);
  };
  let ansArray = createZeroArray(TOTAL_PERSON);

  for (let k = 0; k < TOTAL_PERSON; k++)
    for (let i = 0; i < REPORTED_PERSON; i++) {
      if (test[i][0] === id_list[k] && reportedPerson.includes(test[i][1])) {
        ansArray[k]++;
      }
    }

  return ansArray;
};

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
); // [2,1,1,0]

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3); // [0,0]
