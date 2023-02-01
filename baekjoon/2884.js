const readline = require("readline");
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

function Alarm(h, m) {
  m -= 45;

  if(m < 0){
    m = m + 60;
    h--;
    if(h < 0)
    h = 23;
  }
  console.log(h, m);
}

rl.on('line', function(line) {
  let input = line.split(" ");
  let inputHour = parseInt(input[0]);
  let inputMinute = parseInt(input[1]);
  Alarm(inputHour, inputMinute);
  rl.close();
}).on('close', function() {
  process.exit();
});