/*
Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.
*/
var numerosIngresados = [];
let numero = prompt('Ingrese un número:');

while (numero != 0) {
    numerosIngresados.push(numero);
    numero = prompt('Ingrese otro número:');
}
var suma = numerosIngresados.reduce(function(acc, element) {
    return acc + parseInt(element, 10);
}, 0);

console.log('El arreglo es: ' + numerosIngresados);
console.log('La suma es: ' + suma);

console.log(Math.max(...numerosIngresados));
console.log(Math.min(...numerosIngresados));
console.log(suma/numerosIngresados.length);