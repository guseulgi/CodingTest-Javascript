/*
문제 설명
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100
*/

function solution(n) {
  let answer = 0;
  let answerArr = [];
  for (let i = 1; i <= n; i++) {
    answerArr[i-1] = 0;
    for (let j = n; j > 0; j--) {
      if(i % j === 0) {
        answerArr[i-1]++;
      }
    }
  }
  // console.log(answerArr);
  answer = answerArr.filter(value => value >= 3);
  return answer.length;
}

console.log(solution(10));
console.log(solution(15));