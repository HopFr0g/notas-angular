// Decoradores: permiten agregar funcionalidad a una clase, método o atributo sin modificarlo

// La función Saludar es un decorador
// Lo que hace es definir una función "saludos()" sobre la clase a la que le apliquemos el decorador
function Saludar(target : Function) : void {
    target.prototype.saludos = () : void => {
        console.log("El decorador @Saludar te dice hola!");
    }
}

// Ahora, podemos decorar una clase con @Saludar y podremos acceder al método saludos() sin haberlo definido en la clase:
@Saludar
class Hola {
    constructor() {
        
    }
}

let hola1 = new Hola();
hola1.saludos();

// Podríamos ver algunos errores de TypeScript debido a que los decoradores son experimentales.