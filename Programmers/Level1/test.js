//async await은 프로미스 객체를 기반으로 하고있음

// Promise 객체를 리턴하는 함수
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}

// Promise 객체를 이용해서 비동기 로직을 수행
p(1000).then((ms) => {
  console.log(`${ms}ms후에 실행된다.`);
});

// Promise 객체를 리턴하는 함수를 await으로 호출하는 방법
async function main() {
  const ms = await p(1000);
  console.log(`${ms}ms후에 실행된다.`);
}
main();

/* async가 들어있는 함수는 안에있는 로직이 끝날 때까지 로직종료되지 않음
중간중간 await이 걸려있는 문장은 비동기 처리가끝날때까지 기다림
장점 : 비동기 처리가 stream에 맞게 밑으로 흘러가면서 처리되어 이해하기 쉽다 */
async function main2() {
  try {
    const ms = await p(1000);
    //정상 처리부
  } catch (error) {
    console.log(error);
  } finally {
    console.log("end");
  }
}
main2();

//
function p(ms) {
  //3
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000); //2
  return "Mark: " + ms;
}

async function main3() {
  try {
    const ms = awaitP(); //1
  } catch (error) {
    console.log(error);
  } finally {
    console.log("end");
  }
}
main3();
