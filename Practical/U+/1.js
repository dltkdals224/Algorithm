function solution(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(sorting(arr[i]));
  }

  const ansArr = new Set(newArr);

  return ansArr.size;
}

const sorting = (num) => {
  const numArr = String(num).split("");
  numArr.sort((a, b) => {
    return a - b;
  });

  return numArr.join("");
};

solution([112, 1814, 121, 1481, 1184]); //2
solution([1201, 112, 331, 313]); // 3
