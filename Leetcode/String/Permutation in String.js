// 2023.02.04
// 풀이 참조됨
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
  const map1 = new Map();
  const map2 = new Map();

  let track = (fm, sm) => {
    for (let i in fm) {
      if (!sm[i]) {
        return false;
      }
      if (sm[i] != fm[i]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s1.length; i++) {
    map1[s1[i]] = (map1[s1[i]] || 0) + 1;
    map2[s2[i]] = (map2[s2[i]] || 0) + 1;
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (track(map1, map2)) {
      return true;
    }
    map2[s2[i + s1.length]] = (map2[s2[i + s1.length]] || 0) + 1;
    map2[s2[i]]--;
  }

  return track(map1, map2);
};

// 직접 Permutation을 만들면 Maximum call stack size exceeded

checkInclusion("ab", "eidbaooo");
checkInclusion("ab", "eidboaoo");
checkInclusion("abc", "eaitskcbaoooa");
checkInclusion("prosperity", "properties");
