// Una clase en TypeScript se declara del siguiente modo:
class Persona {
    // Sus atributos y métodos pueden declararse con las palabras reservadas "public" y "private" para definir quién accede a los mismos:
    private nombre : string;
    
    // Constructor:
    constructor(nombre : string) {
        this.nombre = nombre;
    }
    
    // Getter y setter:
    public getNombre() : string {
        return this.nombre;
    }
    
    public setNombre(nombre : string) : void {
        this.nombre = nombre;
    }
    
    // También se puede usar la palabra reservada "static" en métodos y atributos que son propios de la clase y no de objetos específicos:
    public static saludar(nombre : string) : void {
        console.log(`Hola ${nombre}`);
    }
}

// Crear un objeto de una clase dada. El tipo de datos es el nombre de la clase que estamos instanciando:
const leonel : Persona = new Persona("Leonel");

console.log("La persona se llama: " + leonel.getNombre());

// Llamar a un método estático (directamente sobre la clase, no se necesita una instancia de la misma):
Persona.saludar("Leonel");