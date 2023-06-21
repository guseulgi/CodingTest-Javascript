/*  메모화와 동적 계획법
    패밀리 레스토랑에서 여러 개의 테이블에 사람을 나누어 앉히려고 할 때,
    한 사람만 앉는 테이블은 없게 그룹을 지어야 한다.
    인원수를 나누는 패턴만 구하면 되고 누가 어디에 앉는지는 고려하지 않을 때
    한 개의 테이블에 앉을 수 있는 사람은 최대 10명이다.
    그럼 100명이 하나 이상의 테이블에 나누어 앉는 패턴을 구하면?

    예를 들어 6명일 때 앉는 방법은
    2 + 2 + 2
    3 + 3
    4 + 2
    6
    총 4가지이다.
*/

const peopleCnt = 100;
const limitCnt = 10;

function tabling(pre, totalCnt) {
  if(totalCnt < 0) return 0;
  else if(totalCnt === 0) return 1;

  let cnt = 0;
  for(let i = pre; i <= limitCnt; i++) {
    // 재귀적 처리
    cnt += tabling(i, totalCnt - i);
  }
  return cnt;
}
let curTime = performance.now();
console.log(tabling(2, peopleCnt)); // 437420
console.log(performance.now() - curTime); // 80.8556249961257

/////// 값을 저장하고 저장한 값을 사용하여 위와 동일한 재귀 함수를 사용하는 함수
let buffer = {};
function tablingAndCaching(pre, totalCnt) {
  if(buffer[[pre, totalCnt]]) return buffer[[pre, totalCnt]];

  if(totalCnt < 0) return 0;
  else if(totalCnt === 0) return 1;

  let cnt = 0;
  for(let i = pre; i<= limitCnt; i++) {
    cnt += tablingAndCaching(i, totalCnt - i);
  }
  buffer[[pre, totalCnt]] = cnt;
  return cnt;
}
curTime = performance.now();
console.log(tablingAndCaching(2, peopleCnt)); // 437420
console.log(performance.now() - curTime); // 8.038416996598244
console.log(buffer)

// 두 시간을 측정해보면 10배에 가까운 퍼포먼스 차이를 보임.