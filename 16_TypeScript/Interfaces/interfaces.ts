// Las interfaces definen tipos de datos con ciertos atributos y métodos
// que deben ser respetados por los objetos que utilicen dicha interfaz.

// Declaración de una interfaz:
interface Usuario {
    nombre : string;
    password : string;
    confirmacionPassword? : string;
};

// Declaración de un objeto cuyo tipo de datos es la interfaz:
let usuario1 : Usuario = {nombre: "leonel", password: "1234", confirmacionPassword: "1234"};

// Podemos omitir atributos opcionales pero no los obligatorios, de lo contrario veremos un error:
let usuario2 : Usuario = {nombre: "leonel", password: "1234"};

// Lo mismo ocurre con los métodos de una interfaz:
interface Vehiculo {
    abordar() : string;
};

let avion : Vehiculo = {
    abordar: () : string => {
        return "Abordando un avión!";
    }
};

console.log(avion.abordar());