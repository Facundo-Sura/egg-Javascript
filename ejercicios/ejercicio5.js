/*
Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.
*/
var val1 = 12;
var val2 = 6;
var opcion = prompt('ingrese la operacion matematica');

switch (opcion.toLowerCase()) {
    case 's':
        console.log(val1 + val2);
        break;
    case 'r':
        console.log(val1 - val2);
        break;
    case 'm':
        console.log(val1 * val2);
        break;
    case 'd':
        console.log(val1 / val2);
        break;
    default :
        console.log('Momentaneamente no esta disponible esa operacion');
        break;
}