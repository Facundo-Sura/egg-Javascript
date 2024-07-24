/*
Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.
*/
const valorLimite = 50;
let numero = prompt('ingrese un valor:');
while (valorLimite != numero) {
    numero = prompt('Ingrese otro valor:');
}