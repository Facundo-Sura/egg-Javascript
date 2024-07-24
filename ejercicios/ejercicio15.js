/*
Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.
*/
function area(radio) {
    const PI = 3.14;
    return PI * Math.pow(radio,2);
}
function perimetro(radio) {
    const PI = 3.14;
    return 2 * PI * radio;
}

var circulo = {
    radio : parseInt(prompt('Ingrese el radio de su círculo:'), 10),
};

console.log(`El Perímetro de si circunferencia es: ${area(circulo.radio)}`);
console.log(`El Perímetro de su circunferencia es: ${perimetro(circulo.radio)}`);