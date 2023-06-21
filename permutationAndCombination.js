/*  순열과 조합
    순열 : n개 중에서 r개를 추출하는 경우의 수에서 정렬 방법을 고려한 경우,
          순서대로 뽑아서 줄을 세우는 것
    nPr = n * (n-1) * (n-2) * ... * (n-r+1)
          n부터 1씩 작은 수를 r개 만큼 곱하는 것임.
    factorial 은 순열의 한 부분으로 r = n인, nPn 로 이를 식으로 나타내면 n * (n-1) * (n-2) * ... * 1
    n 팩토리얼은 1부터 n까지의 곱, n계승이라 하고 n! 이라고 표기한다.

    조합 : n개 중에서 r개를 추출하는 경우의 수에서 선택 방법을 고려한 경우, 순서에 무관하게 r개를 선택한 것.
    nCr = n! / r! * (n-r)!
        = n * (n-1) * ... * (n-r+1) / r! = nPr / r!
*/

// 순열
function nPr(n, r) {
  let result = 1;
  for(let i = n - r + 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 조합1
let memo = [1];
function factorial(n) {
  if(memo[n]) return memo[n];

  return memo[n] = n * factorial(n - 1);
}
function nCr(n, r) {
  return factorial(n) / factorial(r) * factorial(n-r);
}

// 조합2 nCr = n-1Cr-1 + n-1Cr 방법
let memo2 = {};
function nCr2(n, r) {
  if(memo[[n, r]]) return memo[[n, r]];
  if((r == 0) || (r == n)) return 1;
  return memo[[n, r]] = nCr2(n - 1, r - 1) + nCr2(n - 1, r);
}