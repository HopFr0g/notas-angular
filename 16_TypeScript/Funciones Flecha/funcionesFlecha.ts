// Funciones flecha: otra sintaxis para declarar funciones
// Sintaxis: nombreVariable = (parámetros) : returnType => {cuerpo de la función}

// Ejemplo:
let restar = (a : number, b : number) : number => {
    return a - b;
}

let resultadoResta : number = restar(5, 2);
console.log(resultadoResta);

// Cuando el cuerpo de la función es de una línea, se pueden omitir las {} y la palabra reservada "return" (ya que el return es automático):
let multiplicar = (a : number, b : number) : number => a * b;

let resultadoMultiplicacion : number = multiplicar(3, 4);
console.log(resultadoMultiplicacion);