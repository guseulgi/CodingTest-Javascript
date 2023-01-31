/*
  코딩테스트용 node.js으로 자바스크립트의 입력
  텍스트 파일 형태로 주어지므로 fs 모듈로 받아야 한다. (다른 방식으론 readline 방식이 있다)
  
  1. 입력값이 한 개일 때 (한줄)
    const fs = require('fs');
    const input = fs.readFileSync("/dev/stdin").toString().trim();

  2. 입력값이 여러 개 일때 (한줄에 공백으로 구분)
    const fs = require('fs');
    const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

  3. 입력값이 여러 줄 일때
    const fs = require('fs');
    const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
    const fs = require('fs');
    const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
    const inputArr = input.trim().split(" ");
  
  5. 입력값이 첫번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
    const fs = require('fs');
    const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
*/

const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let num1 = Number(inputs[0]);
let num2 = Number(inputs[1]);

var result = function(a, b) {
  if(a > b)
    console.log(">");
  else if (a < b)
    console.log("<");
  else if (a === b)
    console.log("==");
};
result(num1, num2);