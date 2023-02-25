/*
문제 설명
1부터 13까지의 수에서, 
1은 1, 10, 11, 12, 13 이렇게 총 
6번 등장합니다. 정수 i, j, k가 매개변수로
 주어질 때, i부터 j까지 k가 몇 번 
 등장하는지 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ i < j ≤ 100,000
0 ≤ k ≤ 9
*/
function solution(i, j, k) {
  let answer = 0;
  let numbers = [];
  for (; i <= j; i++) {
      numbers.push(`${i}`);
  }

  numbers.forEach(value => {
    console.log([...value]); 
    let tmpArr = [...value];
    answer += tmpArr.filter(value => value.includes(`${k}`)).length;
  });
  
  return answer;
}

console.log(solution(1, 13, 1));