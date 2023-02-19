/**
 * 문제 설명
어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 1,000,000
 */

function solution(n) {
  let answer = 0;
  for(let i = 2 ; i <= Math.sqrt(n); i++) {
      if(n / i === i) {
        answer = 1;
        break;
      } else
          answer = 2;
  }
  return answer;
}

console.log(solution(144));
console.log(solution(976));