const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const N = Number(input[0])

console.log(`${N} * 1 = ${N*1}
${N} * 2 = ${N*2}
${N} * 3 = ${N*3}
${N} * 4 = ${N*4}
${N} * 5 = ${N*5}
${N} * 6 = ${N*6}
${N} * 7 = ${N*7}
${N} * 8 = ${N*8}
${N} * 9 = ${N*9}`)