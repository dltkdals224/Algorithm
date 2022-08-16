function solution(paths) {
  let answer = "";

  paths.map((v) => {
    if (v === "..") {
      answer = answer.slice(1, answer.lastIndexOf("/"));
    }
    if (v === "...") {
      answer = answer.slice(1, answer.lastIndexOf("/"));
      answer = answer.slice(1, answer.lastIndexOf("/"));
    }

    if (v !== ".." && v !== "...") {
      answer += `/${v}`;
    }
  });

  answer = answer.replace(/\/\//g, "/");
  answer = answer.replace(/\/\./g, "");
  if (answer[0] !== "/") {
    answer = "/".concat(answer);
  }

  return answer;
}

solution(["/foo", "bar", "baz/asdf"]);
// '/foo/bar/baz/asdf'

solution(["/foo", "bar", "baz/asdf", "quux", ".."]);
// '/foo/bar/baz/asdf'

solution(["/foo", "bar", "baz/./asdf"]);
// '/foo/bar/baz/asdf'

solution(["/foo", "bar", "baz", "...", "/asdf"]);
// '/foo/asdf'

solution(["/foo", "bar", "...", ".", "ab"]);
// '/ab'
