let cadena = "Hola";
//muestra la cadena
console.log(cadena);
//muestra la longitud de la cadena
console.log(cadena.length);
//muestra el caracter de la posicion indicada dentro del parentesis 
console.log(cadena.charAt(1));
//muestra la posicion del caracter indicado, recorre la cadena del principio al fin (ell sugundo parametro es 
//opcional y con el indicamos desde donde queremos que posicion empiece a buscar en la cadena)
console.log(cadena.indexOf('a', 1));
//igual que indexOf, pero recorre de atras hacia adelante
console.log(cadena.lastIndexOf('o', 1));
//pone todos los caracteres de un string en minuscula
console.log(cadena.toLowerCase());
//pone todos los caracteres de un string en MAYUSCULA
console.log(cadena.toUpperCase());
//reemplaza porciones del texto de un string por otro
console.log(cadena.replace('H', 'z'));
//muestra el string modificado parametrisando donde queremos que inicie y donde termine
console.log(cadena.substring(1, 3))