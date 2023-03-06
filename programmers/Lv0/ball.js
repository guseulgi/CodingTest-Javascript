/*
문제 설명
머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 
공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 
친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, 
k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

제한사항
2 < numbers의 길이 < 100
0 < k < 1,000
numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.
*/

function solution(numbers, k) {
  let answer = 0;
  let len = numbers.length;
  let newNumbers = [];

  for(let j = 0; j < k; j++) {
    for(let i =0; i < len; i++) {
      newNumbers.push(numbers[i]);
    }
  }
  
  let odd = [];
  let even = [];

  for (let i = 0; i < newNumbers.length; i+=2) {

    if(len % 2 === 0) {
      // 짝수 명이면 -> 홀수번째만 선택됨
      odd.push(newNumbers[i]);
    } else {
      // 홀수 명이면 ->
      even.push(newNumbers[i]);
    }
  }

  if(len % 2 === 0) {
    answer = odd[k-1];
  } else {
    answer = even[k-1];
  }

  // console.log(odd);
  // console.log(even);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], 5));

console.log(solution([1, 2, 3], 2));