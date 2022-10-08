//2021.10.07
function solution(lottos, win_nums) {
  let ans = [];
  let tmp = 0;
  let correct_nums = 0;

  let high_rank = 0;
  let low_rank = 0;

  for (let n = 0; n < lottos.length; n++) {
    if (lottos[n] == 0) tmp++;
  }
  correct_nums = lottos.filter((x) => win_nums.includes(x)).length;

  high_rank = 7 - (correct_nums + tmp);
  if (high_rank == 7) high_rank = 6;
  low_rank = 7 - correct_nums;
  if (low_rank == 7) low_rank = 6;
  ans = [high_rank, low_rank];

  return ans;
}
