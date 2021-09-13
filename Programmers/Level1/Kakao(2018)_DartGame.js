//2021.09.13
function solution(dartResult) {
    let answer = 0;
    let ansList = [];

    dartResultArr = dartResult.split('');

    for (let n = 0; n < dartResult.length; n++) {
        if (dartResult[n] == 'S') {
            if (dartResult[n - 2] == 1)
                ansList[n] = 10;
            else
                ansList[n] = Number(dartResult[n - 1]);
            //console.log(ansList[n] = Number(dartResult[n - 1]));
        }
        if (dartResult[n] == 'D') {
            if (dartResult[n - 2] == 1)
                ansList[n] = Number(Math.pow(10, 2));
            else
                ansList[n] = Number(Math.pow(dartResult[n - 1], 2));
            //console.log(ansList[n] = Number(Math.pow(dartResult[n - 1], 2)));
        }
        if (dartResult[n] == 'T') {
            if (dartResult[n - 2] == 1)
                ansList[n] = Number(Math.pow(10, 3));
            else
                ansList[n] = Number(Math.pow(dartResult[n - 1], 3));
            //console.log(ansList[n] = Number(Math.pow(dartResult[n - 1], 3)));
        }

        if (dartResult[n] == '*') {
            ansList[n - 1] *= 2;
            for (let t = n - 2; t > 0; t--) {
                if (!isNaN(ansList[t])) {
                    ansList[t] *= 2;
                    break;
                }
            }
        }

        if (dartResult[n] == '#') {
            ansList[n - 1] *= -1;
        }
    }

    console.log("합");
    //합연산
    for (let i = 0; i < dartResult.length; i++)
        if (ansList[i] != undefined && !isNaN(ansList[i])) {
            console.log(ansList[i]);
            answer += ansList[i];
        }

    return answer;
}

solution("1D2S3T*");

//다른 풀이
/*
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}
*/