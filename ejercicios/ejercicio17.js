/*
Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado
*/
let array = [50, 0, 122, 2348];

for (let i = 0; i < 2; i++) {
    array.pop();
}

console.log(array);