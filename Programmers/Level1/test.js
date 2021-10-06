function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //js에서 사용하는 error객체
      reject(new Error("Fatal Error"));
    }, 1000);
  });
}

p()
  .then((message) => {
    //resolve를 통해 매개변수가 전달됨
    console.log("1000ms후에 fulfilled됩니다.", message);
  })
  //catch : 비동기 함수가 잘못되었을때의 상태를 잡는 code
  .catch((reason) => {
    console.log("1000ms후에 rejected됩니다.", reason); //1000ms후에 rejected됩니다. error
    //보통은 이처럼 js에서 사용하는 에러 객체를 매개변수로 넘기는게 일반적.
  });
