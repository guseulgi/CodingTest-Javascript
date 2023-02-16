function solution(n) {
  let answer = [];
  // for (let i = 1; i <= n; i++ ){
  //   if(i % 2 === 1) {
  //     answer.push(i);
  //   }
  // }
  for (let i = 1; i <= n; i += 2 ){
     answer.push(i);
  }
  return answer;
}

console.log(solution(10));
console.log(solution(15));