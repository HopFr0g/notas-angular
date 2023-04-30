"use strict";
const saludar = () => {
    let numero = 5;
    let nombre = "Leonel";
    numero = 42;
    console.log(`¡Hola ${nombre}, me alegro que tu número favorito sea el ${numero}!`);
};
saludar();
const saludarPersonalizado = (nombre, numero) => {
    console.log(`¡Hola ${nombre}, me alegro que tu número favorito sea el ${numero}!`);
};
saludarPersonalizado("Leonel", 5);
const sumar = (x, y) => {
    return x + y;
};
sumar(4, 5);
const calcularGanancias = (ganancias = 0) => {
    console.log(`Su sueldo es $${ganancias} y por lo tanto su impuesto es de $${ganancias * 0.35}`);
};
calcularGanancias();
calcularGanancias(5);
const imprimirNumero = (numero) => {
    console.log(`Número favorito: ${numero}`);
};
imprimirNumero(5);
imprimirNumero("cinco");
imprimirNumero(null);
const mostrarNombre = (nombre) => {
    console.log(nombre);
};
mostrarNombre("Leo");
mostrarNombre();
