// ... rest, ... spread
const numeros = [1,2,3,4,5,6,7,8,9];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);

/* 
// ... rest, ... spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
*/