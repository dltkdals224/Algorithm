let s = "3people Unfollowed Me";
console.log(s[0]);

if (isNaN(s[0])) console.log("11");
if (isNaN(s[1])) console.log("22");

console.log(String.fromCharCode(s[1].charCodeAt(0) - 32));
console.log(typeof String.fromCharCode(s[1].charCodeAt(0) - 32));
console.log(typeof Number(String.fromCharCode(s[1].charCodeAt(0) - 32)));

let test = String.fromCharCode(s[1].charCodeAt(0) - 32);
if (isNaN(test)) console.log("int형 아닙니다.");

let test2 = Number(String.fromCharCode(s[1].charCodeAt(0) - 32));
if (isNaN(test2)) console.log("int형 아닙니다.");
