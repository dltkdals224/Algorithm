//2021.09.21
function solution(N, stages) {
    let tmpArr = [];

    let successPeople = 0;
    let stopPeople = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] >= i) {
                successPeople++;
            }
            if (stages[j] == i) {
                stopPeople++;
            }
        }

        tmpArr[i - 1] = stopPeople / successPeople;
        successPeople = 0;
        stopPeople = 0;
    }

    //이 부분은 도움을 받음
    return [...tmpArr.keys()].sort((a, b) => {
        return tmpArr[b] - tmpArr[a];
    }).map(x => x + 1);
}


//New information
//sort의 인자관련 내림(오름)차순 리턴법 - 굉장히 까다로움


//다른 풀이
/*
function solution(N, stages) {
    let ans = []

    for (let i = 1; i <= N; ++i) {
        let usersReachedCurrentStage   = stages.reduce((acc, curStage) => acc + ((curStage >= i) ? 1 : 0), 0)
        let usersStagnatedCurrentStage = stages.reduce((acc, curStage) => acc + ((curStage == i) ? 1 : 0), 0)
        if (usersReachedCurrentStage === 0) {
            ans.push({ 'stage': i, 'failRate': 0 })
            continue
        }

        ans.push({ 'stage': i, 'failRate': (usersStagnatedCurrentStage / usersReachedCurrentStage) })
    }

    return ans.sort((a, b) => {
        if (a.failRate > b.failRate) return -1
        if (a.failRate < b.failRate) return 1
        return a.stage - b.stage
    }).map(entry => entry.stage)
}
*/