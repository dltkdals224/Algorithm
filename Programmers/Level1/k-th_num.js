//2021.09.22
function solution(array, commands) {
    let ans = [];

    //commands에 따른 배열 생성 함수
    function newArr(array, commands) {
        let tmpArr = [];
        let tmpStart = 0;
        let tmpEnd = 0;
        let tmpNth = 0;

        if (commands[0].length == 3) {
            for (let i = 0; i < commands.length; i++) {
                tmpStart = commands[i][0] - 1;
                tmpEnd = commands[i][1] - 1;
                tmpNth = commands[i][2] - 1;

                for (let j = tmpStart; j <= tmpEnd; j++) {
                    tmpArr.push(array[j]);
                }

                console.log(tmpArr);

                ans.push(tmpArr.sort((a, b) => {
                    return a - b
                })[tmpNth]);

                tmpArr = [];
            }
        } else
        ;
    }

    newArr(array, commands);
    return ans;
}


//다른 풀이
/*
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}
*/