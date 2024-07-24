/*
Escribir una función flecha que reciba una palabra y la devuelva al revés.
*/
var alReves = (palabra) => {
    return palabra.split('').reverse().join('');
}

const palabraIngresada = prompt('Ingrese una palabra:');

console.log(alReves(palabraIngresada));