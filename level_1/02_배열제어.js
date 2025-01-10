function solution(arr) {
  const uniqueArr = [...new Set(arr)]; //중복제거
  uniqueArr.sort((a, b) => b - a); //내림차순

  return uniqueArr;
}
