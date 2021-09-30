const arr = ["1", "2", "3"];
let sangmin = new Set(arr);

console.log(sangmin); //Set(3) {'1','2','3'}
console.log(sangmin.size); //3
console.log(Object.keys(sangmin).length); //0
//key값이 따로 존재하지 않기 때문.
