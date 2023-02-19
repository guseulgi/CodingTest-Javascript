/*
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers 의 길이 ≤ 100
*/

function solution(numbers) {
  let answer = 0;
  if(numbers.length < 3) {
    return numbers[0] * numbers[1];
  }

  let plusNums = [];
  let minusNums = [];
  for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] > 0) {
          plusNums.push(numbers[i]);
      } else {
          minusNums.push(numbers[i]);
      }
  }
  plusNums.sort((a,b)=> a-b);
  minusNums.sort((a,b)=> a-b);
  
  const plusMax = plusNums[plusNums.length - 1];
  const plusMaxSecond = plusNums[plusNums.length - 2];
  const minusMax = minusNums[0];
  const minusMaxSecond = minusNums[1];
  console.log(plusMax, plusMaxSecond, minusMax, minusMaxSecond);

  if(plusNums.length === 0) {
      answer = minusMax * minusMaxSecond;
  } else if (minusNums.length === 0) {
      answer = plusMax * plusMaxSecond;
  } else {
    if(plusMax * plusMaxSecond > minusMax * minusMaxSecond) {
      answer = plusMax * plusMaxSecond;
    } else if (plusMax * plusMaxSecond < minusMax * minusMaxSecond) {
      answer = minusMax * minusMaxSecond;
    } else {
      if(plusMax === undefined || plusMaxSecond === undefined) {
        answer = minusMax * minusMaxSecond;
      } else if (minusMax === undefined || minusMaxSecond === undefined) {
        answer = plusMax * plusMaxSecond;
      }
    }
  }
  
  return answer;
}

console.log(solution([-10, 2]));
console.log(solution( [-10,1,2,3]));