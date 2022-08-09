function solution(paths) {
  var answer = "";
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
