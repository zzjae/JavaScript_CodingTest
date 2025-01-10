function solution(s) {
  //회전 하는 번수
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;

    //회전 하며 옳은지 확인
    for (let j = 0; j < n; j++) {
      const c = s[(i + j) % n];

      if (c === "(" || c === "{" || c === "[") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];

        if (top === "(" && c === ")") {
          stack.pop();
        } else if (top === "{" && c === "}") {
          stack.pop();
        } else if (top === "[" && c === "]") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
