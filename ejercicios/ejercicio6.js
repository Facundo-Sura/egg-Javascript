/*
Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.
*/
var num = prompt('Ingrese un valor:');
if (num == 0) console.log('el número no es par ni impar');
else if (num % 2 === 0) console.log('El valor es Par');
else console.log('El valor es Impar');