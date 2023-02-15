const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let inputArr = fs.readFileSync(filePath).toString();
let inputArr = fs.readFileSync(__dirname + '/input.txt').toString();

const stdAllCount = 30; // 1~30
let stdAllArray = [];
for(let i = 0; i < stdAllCount; i++) {
  stdAllArray[i] = i + 1;
} // [1, 2,..., 30]

let stdArray = inputArr.split('\n');
stdArray = stdArray.sort(function(a, b){
  return a-b; //숫자의 오름차순 정렬
});
// 배열을 미리 숫자로 형변환해줘야 정확한 값이 나올 수 있음;
stdArray.forEach((value, idx) => stdArray[idx] = Number(stdArray[idx]));

//차집합 -> 모든 학생 배열에서 과제를 제출한 학생 배열을 빼주면 과제를 안낸 학생 배열을 얻을 수 있는 것
let result = stdAllArray.filter(x => !stdArray.includes(x));
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}