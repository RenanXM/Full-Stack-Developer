/*
let a = 0;
let b = 2;

function verificaMaior(a,b) {
  if (a > b) return a
  else return b
  if (a === b) return 'Igual';
}
console.log(verificaMaior(a,b));
*/

let a = 0;
let b = 2;

function max(x,y) {
  return x > y ? x : y;
}

//arrow function

const max2 = (x,y) => x > y ? x : y;

console.log(max2(a,b));
