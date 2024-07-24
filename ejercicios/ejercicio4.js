/*
Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.
*/
var frase = prompt('Ingrese una frase:');
frase.toLocaleLowerCase();
if(frase.includes('s') || frase.includes('n')) console.log('CORRECTO');
else console.log('INCORRECTO');