/*
Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.
*/
var libro = {
    ISBN : prompt('Ingrese ISBN:'),
    titulo : prompt('Ingrese el Título:'),
    autor : prompt('Ingrese el Autor:'),
    NumeroPaginas : prompt('Ingresese la cántidad de páginas:'),
}

console.log(libro);
