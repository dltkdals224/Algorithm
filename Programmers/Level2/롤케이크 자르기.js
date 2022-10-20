// 2022.10.20
function solution(topping) {
  let answer = 0;

  const person1 = new Map();
  const person2 = new Map();

  for (let i = 0; i < topping.length; i++) {
    person1.set(topping[i], (person1.get(topping[i]) || 0) + 1);
  }

  for (let i = 0; i < topping.length - 1; i++) {
    person2.set(topping[i], (person2.get(topping[i]) || 0) + 1);
    if (person1.get(topping[i]) === 1) {
      person1.delete(topping[i]);
    } else {
      person1.set(topping[i], person1.get(topping[i]) - 1);
    }

    if (person1.size === person2.size) {
      answer++;
    }
  }

  return answer;
}

// O(n^2)를 피하는게 주요 로직.
