"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    static saludar(nombre) {
        console.log(`Hola ${nombre}`);
    }
}
const leonel = new Persona("Leonel");
console.log("La persona se llama: " + leonel.getNombre());
Persona.saludar("Leonel");
