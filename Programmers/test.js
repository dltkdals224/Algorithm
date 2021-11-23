// String객체 생성하기
var strObj = new String("hello");
console.log(strObj); //[String: 'hello']

// Array(배열)객체 생성하기
var strObj = new Array([1, 2, 3]);
console.log(arrObj); //[ [ 1, 2, 3 ] ]

acc = async function (a, b) {
  delay(10);

  if (a < 0) throw new Error("not supported");
  return a + b;
};
let string = await add(-2, 4);
console.log(string);
// strObj
// string
