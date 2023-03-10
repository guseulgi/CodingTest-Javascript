/*
문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

i! ≤ n
제한사항
0 < n ≤ 3,628,800
*/

function solution(n) {
  let answer = 0;
  for(let i = 1; i <= n; i++) {
    console.log(i, factorial(i));
      if(factorial(i) < n) {
          continue;
      } else if (factorial(i) > n) {
        answer = i - 1;
        break;
      } else {
        answer = i;
      }
  }
  return answer;
}

function factorial(n) {
  if( n === 1 || n === 0) return 1;
  return n * factorial(n-1);
}

console.log(solution(3628800));
console.log(solution(5040));
