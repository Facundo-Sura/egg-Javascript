/*
Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.
*/
let vector1 = [];
let vector2 = [];

for (let i = 0; i < 5; i++) {
    var elementoAleatorio = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    vector1.push(elementoAleatorio);
    vector2.push(elementoAleatorio);
}

console.log(vector1);
console.log(vector2);