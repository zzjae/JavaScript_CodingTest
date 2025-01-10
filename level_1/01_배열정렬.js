function solution(arr) {
  arr.sort((a, b) => a - b); //오름차순
  return arr;
}

//[1,10,5,3,100].sort() -> [1,10,100,3,5]
