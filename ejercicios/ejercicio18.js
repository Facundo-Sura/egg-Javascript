/*
A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos
*/
var valores = [true, 5, false, "hola", "adios", 2];
let valoStr = [];

for (let i = 0; i < valores.length; i++) {
    if (valores[i].typeof === String) {
        console.log(valores[i]);
        /*if (valores[i].length > cadenaMayor.length) {
            cadenaMayor = valores[i];
            console.log(cadenaMayor);
        }*/
    }
}00