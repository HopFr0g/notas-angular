// Generics: son componentes que pueden trabajar con varios tipos de datos en lugar de solo uno

// Por ejemplo, podemos crear una función que reciba un parámetro de tipo genérico y que nos asegure que el valor retornado será del mismo tipo:
function identity<Type>(arg : Type) : Type {
    return arg;
}

// La clase Array de TypeScript es genérica y nos permite definir de qué tipo de datos serán sus elementos:
let arregloNumeros : Array<number>;

// TypeScript nos mostrará un error si intentamos añadir un elemento que no sea número en nuestro array:
arregloNumeros = [0, 1, 2, 3];