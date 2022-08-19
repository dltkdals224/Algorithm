function safelyGet(object, path) {
  // 핵심
  // 객체와 string을 입력받아, string으로 객체를 탐색할 수 있도록 함.
  function multiIndex(object, is) {
    if (object === undefined) {
      return undefined;
    }

    // 재귀함수로써 string을 모두 소진할때까지 호출한다.
    return is.length === 0 ? object : multiIndex(object[is[0]], is.slice(1));
  }

  return multiIndex(object, path.split("."));
}

function solution(input, path) {
  const result = safelyGet(JSON.parse(input), path);

  if (result === undefined) {
    return "undefined";
  }

  return JSON.stringify(result);
}

const object1 = {
  repository: undefined,
};

const object2 = {
  repository: {
    readme: undefined,
  },
};

const object3 = {
  repository: {
    readme: {
      extension: "md",
      content: "금융을 쉽고 간편하게",
    },
  },
};

safelyGet(object2, "repository.readme.extension"); // -> undefined
safelyGet(object2, "repository.readme"); // -> undefined
safelyGet(object1, "repository"); // -> undefined
safelyGet(object3, "repository.readme.extension"); // -> md
