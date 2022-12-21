// 2022.12.21
function solution(survey, choices) {
  const result = {
    R: 0,
    C: 0,
    J: 0,
    A: 0,
  };

  survey.forEach((type, idx) => {
    switch (type[0]) {
      case "R":
        result.R += 4 - choices[idx];
        break;
      case "T":
        result.R += choices[idx] - 4;
        break;
      case "C":
        result.C += 4 - choices[idx];
        break;
      case "F":
        result.C += choices[idx] - 4;
        break;
      case "J":
        result.J += 4 - choices[idx];
        break;
      case "M":
        result.J += choices[idx] - 4;
        break;
      case "A":
        result.A += 4 - choices[idx];
        break;
      case "N":
        result.A += choices[idx] - 4;
        break;
    }
  });

  return getAns(result);
}

const getAns = (object) => {
  let returnString = "";

  if (object.R >= 0) {
    returnString += "R";
  } else {
    returnString += "T";
  }

  if (object.C >= 0) {
    returnString += "C";
  } else {
    returnString += "F";
  }

  if (object.J >= 0) {
    returnString += "J";
  } else {
    returnString += "M";
  }

  if (object.A >= 0) {
    returnString += "A";
  } else {
    returnString += "N";
  }

  return returnString;
};

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]); // "TCMA"
solution(["TR", "RT", "TR"], [7, 1, 3]); //"RCJA"
