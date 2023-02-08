function solution(n) {
  let ans = [];

  const handleTriangle = (value) => {
    const type = value % 3;
    console.log(value);
    // 좌변
    if (type === n % 3) {
      console.log("좌");
    }
    // 하단
    if (type === (n % 3) - 1 || type === (n % 3) + 2) {
      console.log("하");
    }
    // 우변
    if (type === (n % 3) - 2 || type === (n % 3) + 1) {
      console.log("우");
    }
  };

  for (let i = n; i > 0; i--) {
    handleTriangle(i);
  }

  return ans;
}

// solution(4); // [1,2,9,3,10,8,4,5,6,7]
// solution(5); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
solution(6); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
