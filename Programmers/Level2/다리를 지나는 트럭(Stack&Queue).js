function solution(bridge_length, weight, truck_weights) {
  let timeTaken = 0;
  const onBridgeTruckList = [];

  for (let i = 0; i < truck_weights.length; ) {
    if (
      sumOfTruckWeightOnBridge(onBridgeTruckList) + truck_weights[i] <=
      weight
    ) {
      // 다리에 트럭 추가 가능
      onBridgeTruckList.push(truck_weights[i]);
      timeTaken++;
      i++;
    } else {
      // 다리에 트럭 추가 불가능 (적정시간 대기 후 shift연산)
      timeTaken += bridge_length - onBridgeTruckList.length;
      onBridgeTruckList.shift();
    }

    console.log(timeTaken);
  }

  return bridge_length + timeTaken;
}

const sumOfTruckWeightOnBridge = (onBridgeTruckList) => {
  if (onBridgeTruckList.length === 0) {
    return 0;
  } else {
    const res = onBridgeTruckList.reduce((a, b) => {
      return a + b;
    });
    return res;
  }
};

solution(2, 10, [7, 4, 5, 6]); // 8
// solution(100, 100, [10]); // 101
// solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]); // 110
