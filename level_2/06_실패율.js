// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]

function solution(N, stages) {
  //스테이지 마다 도전중인 사용자의 수
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails = {};
  //전체 사용자 수
  let total = stages.length;

  //실패자 명수 구하기
  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    //도전자수 재 정의
    total -= challenger[i];
  }

  //fails는 객체이기 때문에 Object.entries로 배열로 변환
  //[0]이 키, [1]이 값이기 때문에 b[1] - a[1]로
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
}
