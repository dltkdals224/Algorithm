//2021.09.09
function solution(n, arr1, arr2) {
    let answer = [];
    let ansArr1 = [];
    let ansArr2 = [];


    function create2DArray(rows, columns) {
        var arr = new Array(rows);
        for (var i = 0; i < rows; i++) {
            arr[i] = new Array(columns);
        }
        return arr;
    }

    function changeToBinaryNum(arr) {
        let tmpArr = create2DArray(n, n);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                tmpArr[i] = arr[i].toString(2).split('');
            }
        }

        for (let t = 0; t < tmpArr.length; t++) {
            if (tmpArr[t].length < n) {
                while (tmpArr[t].length !== n)
                    tmpArr[t].unshift('0');
            }
        }

        //console.log(tmpArr);
        return tmpArr;
    }

    function compareTwoArr(arr1, arr2) {
        let ans = [];
        //초기화
        for (let t = 0; t < n; t++)
            ans[t] = '';

        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++) {
                if (arr1[i][j] == 0 && arr2[i][j] == 0)
                    ans[i] += " ";
                else
                    ans[i] += "#";
            }
        //console.log(ans);
        return ans;
    }

    ansArr1 = changeToBinaryNum(arr1);
    ansArr2 = changeToBinaryNum(arr2);
    answer = compareTwoArr(ansArr1, ansArr2);

    return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);


//다른풀이1 (허탈)
/*
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
*/


//다른풀이2
/*
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
*/
