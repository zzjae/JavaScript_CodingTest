function solution(answers) {
  //정답입력 패턴
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  //사람 1,2,3의 정답 맞춘 갯수
  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    //answers의 배열을 반복
    for (const [j, pattern] of patterns.entries()) {
      //patterns의 배열을 반복

      //1
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const hightestScore = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      hightestScore.push(i + 1);
    }
  }

  return hightestScore;
}
