// const rl = require("readline").createInterface({
//   input : process.stdin,
//   output : process.stdout
// });


// rl.on('line', function(line) {
//   let inputArr = line.split('₩n');
//   let caseCount = parseInt(inputArr[0]);
//   for(let i = 1; i < caseCount; i++) {
//     let stdCount = parseInt(inputArr[i].split(" ")[0]);
//     let stdScore = 0;
//     let sum = 0;
//     for(let j = 1; j < stdCount; j++) {
//       stdScore = parseInt(inputArr[i].split(" ")[j]);
//       sum += stdScore;
//     }
//     let avg = Math.around((sum / stdScore) * 1000) / 1000;
//     console.log(avg);
//   }
//   rl.close();
// }).on('close', function(){
//   process.exit();
// });

////
const fs = require("fs");
//let inputArr = fs.readFileSync(__dirname + '/input.txt').toString(); 디버깅용
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputArr = fs.readFileSync(filePath).toString();
// console.log("inputArr", inputArr);
inputArr = inputArr.split("\n");
let caseCount = parseInt(inputArr[0]);
// console.log("caseCount", caseCount);


for(let i = 1; i < caseCount + 1; i++) {
  let stdCount = parseInt(inputArr[i].split(" ")[0]);
  let stdScore = 0;
  let sum = 0;
  let stdAllScore = [];
  let avgUpStdCount = 0;
  // console.log("stdCount", stdCount);
  for(let j = 1; j < stdCount + 1; j++) {
    stdScore = parseInt(inputArr[i].split(" ")[j]);
    sum += stdScore;
    stdAllScore.push(stdScore);
  }
  // console.log("sum", parseFloat(sum));
  let avg = parseFloat(sum) / stdCount;
  // console.log("avg", avg);

  stdAllScore.forEach(function(sc) {
    if(avg < sc) {
      avgUpStdCount++;
    }
  });
  console.log(`${((avgUpStdCount / stdCount) * 100).toFixed(3)}%`);
}