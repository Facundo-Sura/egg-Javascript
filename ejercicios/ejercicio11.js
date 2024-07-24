/*
Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”
*/
function palabraMasLarga(str) {
    var palabras = str.split(' ');
    var palabraLarga = palabras[0];

    for (let i=1; i<palabras.length; i++) {
        if (palabras[i].length > palabraLarga.length) {
            palabraLarga = palabras[i];
        }
    }

    return palabraLarga;
}
var frase = prompt('Ingrese una frase:');

console.log(`Resultado esperado: "${palabraMasLarga(frase)}"`);