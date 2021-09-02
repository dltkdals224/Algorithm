//2021.09.02
function solution(strings, n) {
    let answer = [];
    let arr = [];

    //for (let k = 0; k < strings.length; k++)
    //arr[k] = strings[k].split('');

    function compare(a, b) {
        let arr1 = [];
        let arr2 = [];
        arr1 = a.split('');
        arr2 = b.split('');
        console.log(arr1[n]);
        if (arr2[n] > arr1[n])
            return b - a;
    }

    console.log(strings.sort(compare));

}

solution(["sun", "bed", "car"], 1); //car bed sun
console.log("2nd");
solution(["sun", "bed", "car"], 2); //bed sun car