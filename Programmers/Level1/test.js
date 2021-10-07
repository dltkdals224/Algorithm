// Promise.race([프로미스 객체들]);

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

Promise.race([p(3000), p(2000), p(1000)]).then((message) => {
  console.log(
    "가장 빠른애만 fulfilled된 이후에 실행되는 문장 입니다.",
    message
  ); //가장 빠른애만 fulfilled된 이후에 실행되는 문장 입니다. 1000
});
