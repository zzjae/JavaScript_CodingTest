//경계선을 넘었는지 확인 하는 함수
//경계선을 넘지 않았다면 true를 리턴
function isValidMore(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

//위치 업데이트 하는 함수
function updateLocation(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "L":
      return [x - 1, y];
    case "R":
      return [x + 1, y];
  }
}

function solution(dirs) {
  let x = 0;
  let y = 0;

  //겹치는 것은 없애기 위해 중복없는 배열로
  const visited = new Set();

  for (const dir of dirs) {
    const [nx, ny] = updateLocation(x, y, dir);

    if (!isValidMore(nx, ny)) {
      continue;
    }

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}
