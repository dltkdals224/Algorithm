// 2022.10.07
function solution(n, wires) {
  let ansArr = [];

  // 송전탑 연결 객체트리 생성
  const transmissionTower = new Set([...wires].flat(1));
  const wiresTree = {};
  for (let i = 0; i < Array.from(transmissionTower).length; i++) {
    wiresTree[Array.from(transmissionTower)[i]] = [];
  }
  for (let i = 0; i < wires.length; i++) {
    wiresTree[wires[i][0]].push(wires[i][1]);
    wiresTree[wires[i][1]].push(wires[i][0]);
  }

  // 한개씩 제외해가며 dfs
  for (let i = 0; i < wires.length; i++) {
    const targetWire = [...wires].splice(i, 1).flat(1);
    // 깊은 복사를 이루어야 함. (객체 내 배열)
    const cloneObj = JSON.parse(JSON.stringify(wiresTree));

    cloneObj[targetWire[0]].splice(
      cloneObj[targetWire[0]].indexOf(targetWire[1]),
      1
    );
    cloneObj[targetWire[1]].splice(
      cloneObj[targetWire[1]].indexOf(targetWire[0]),
      1
    );

    const connectedWire1 = dfs(cloneObj, targetWire[0]);
    const connectedWire2 = dfs(cloneObj, targetWire[1]);

    ansArr.push(Math.abs(connectedWire1 - connectedWire2));
  }

  return Math.min(...ansArr);
}

// dfs
const dfs = (obj, target) => {
  let count = 0;

  (dfsRecursive = (obj, target, before) => {
    if (obj[target].length === 0) {
      return;
    }

    if (obj[target].includes(before)) {
      obj[target].splice(obj[target].indexOf(before), 1);
    }

    for (let i = 0; i < obj[target].length; i++) {
      count++;
      dfsRecursive(obj, obj[target][i], target);
    }

    return;
  })(obj, target, -1);

  return count;
};
