/*
문제 설명
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 1,000
0 ≤ n ≤ 1,000
*/

//중복된 숫자 개수
function solution(array, n) {
  let answer = 0;
  n = Number(n);
  let checkArr = array.filter(x => x === n)
  answer = checkArr.length;
  return answer;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
console.log(solution([0, 2, 3, 4],	1));