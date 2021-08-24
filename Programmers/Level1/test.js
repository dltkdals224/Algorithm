//test page
string = "try hello world";
let ans = '';

console.log(string);

let arr = string.split(' ', string.length);
console.log(arr);
let arr2 = '';

for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[i].length; j++) {
        arr2 = arr[i].split('', arr[i].length);
    }

console.log(arr2);

//console.log(ans);
//let arr2 = arr.split('', arr.length);

//.toUpperCase()
//.toLowerCase()

//.join()
//.toString()