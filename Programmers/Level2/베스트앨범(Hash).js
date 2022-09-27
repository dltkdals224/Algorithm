// 2022.09.27
function solution(genres, plays) {
  let answer = [];

  const albumTable = new Map();
  const genreTable = new Map();

  // albumTable 생성
  for (let i = 0; i < genres.length; i++) {
    albumTable.set(genres[i], []);
  }
  for (let i = 0; i < genres.length; i++) {
    albumTable.set(genres[i], [...albumTable.get(genres[i]), [i, plays[i]]]);
  }

  // genreTalbe 생성
  for (let i = 0; i < genres.length; i++) {
    genreTable.set(
      genres[i],
      genreTable.get(genres[i])
        ? genreTable.get(genres[i]) + plays[i]
        : plays[i]
    );
  }

  // genreTalbe 정렬
  const genreTableArr = [...genreTable]
    .sort((a, b) => {
      return a[1] - b[1];
    })
    .reverse();
  const newGenreTable = new Map(genreTableArr);

  // genreTable순위에 맞춰 answer에 노래 삽입
  for (let genre of newGenreTable) {
    albumTable.get(genre[0]).sort((a, b) => {
      return b[1] - a[1];
    });

    answer.push(albumTable.get(genre[0])[0][0]);
    albumTable.get(genre[0])[1] && answer.push(albumTable.get(genre[0])[1][0]);
  }

  return answer;
}

// solution(
//   ["classic", "pop", "classic", "classic", "pop"],
//   [500, 600, 150, 800, 2500]
// ); // [4,1,3,0]

// solution(["클래식", "팝", "힙합"], [100, 10000, 1000]); // [1,2,0]

// solution(
//   ["1", "2", "1", "2", "1", "2", "1", "2"],
//   [100, 100, 100, 100, 100, 100, 100, 101]
// ); // [7,1,0,2]
