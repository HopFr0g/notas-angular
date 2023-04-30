// Para exportar una clase que será utilizada por otro módulo, la declaramos con la palabra reservada "export":

export class Persona {
    nombre : string;
    
    constructor(nombre : string) {
        this.nombre = nombre;
    }
    
    getNombre() : string {
        return this.nombre;
    }
    
    setNombre(nombre : string) : void {
        this.nombre = nombre;
    }
}