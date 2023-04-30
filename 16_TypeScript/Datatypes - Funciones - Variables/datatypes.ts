// Para instalar TypeScript en nuestro equipo usamos el comando de NPM "npm install -g typescript"

// Para comenzar, se debe crear un nuevo proyecto de TypeScript con el comando "tsc -init". Creará un archivo tsconfig.json en nuestro working directory

// Para compilar código de TypeScript y obtener su archivo de JavaScript equivalente, se utiliza el comando "tsc [nombre del archivo]"

// Para compilar automáticamente nuestros archivos de TypeScript en el working directory, usamos el comando "tsc -w"

/****************************************************************************************************************************
 * TIPOS DE DATOS:                                                                                                          *
 *   - any (este tipo de datos acepta cualquier dato)                                                                       *
 *   - undefined (tipo de datos para valores sin definir)                                                                   *
 *   - null (tipo de datos para valores null)                                                                               *
 *   - unknown (tipo de datos desconocido, por ejemplo, si proviene de un input del cliente)                                *
 *   - void (ningún tipo, suele usarse como return type de funciones)                                                       *
 *   - string                                                                                                               *
 *   - number                                                                                                               *
 *   - boolean                                                                                                              *
 *   - array (se representa por un tipo de datos seguido de [], por ejemplo number[])                                       *
 *   - object (tipo de datos para objetos, donde también se especifican sus atributos, por ejemplo, {x: number; y: number}) *
 ****************************************************************************************************************************/




// 1) Declaración de variables:

const saludar = () => {
    // Cuando se declara una variable, se debe escribir : [tipo de dato] luego de su nombre, por ejemplo:
    let numero : Number = 5;
    
    // TypeScript tiene inferencia del tipo de datos. Si inicializo la variable al momento de declararla, no es necesario especificar su tipo de datos, por ejemplo:
    let nombre = "Leonel";
    
    // Los nuevos valores de la variable deberán ser del mismo tipo o veremos un error, por ejemplo:
    numero = 42;
    
    console.log(`¡Hola ${nombre}, me alegro que tu número favorito sea el ${numero}!`);
};

saludar();




// 2) Parámetros de las funciones:

// Cuando se declara una función, se debe especificar el tipo de datos de los parámetros del mismo modo:
const saludarPersonalizado = (nombre : String, numero : Number) => {
    console.log(`¡Hola ${nombre}, me alegro que tu número favorito sea el ${numero}!`);
}

// Si, al llamar una función, los parámetros no coinciden en cantidad o tipo de datos, TypeScript mostrará un error:
saludarPersonalizado("Leonel", 5);




// 3) Return type de las funciones:

// Se puede declarar el tipo de datos que retorna una función al colocar : [tipo de datos] al final, por ejemplo:
const sumar = (x : number, y: number) : number => {
    return x + y;
}

sumar(4, 5);




// 4) Parámetros opcionales / por defecto:

// Es posible darle un valor por defecto al parámetro de una función:
const calcularGanancias = (ganancias : number = 0) => {
    console.log(`Su sueldo es $${ganancias} y por lo tanto su impuesto es de $${ganancias * 0.35}`);
}

calcularGanancias();
calcularGanancias(5);

// Es posible que una variable o parámetro de función acepte varios tipos de datos e incluso null:
const imprimirNumero = (numero : Number | String | null) => {
    console.log(`Número favorito: ${numero}`);
}

imprimirNumero(5);
imprimirNumero("cinco");
imprimirNumero(null);

// Podemos declarar que el parámetro de una función es opcional con un ? al final de su nombre:
const mostrarNombre = (nombre? : String) => {
    console.log(nombre);
}

mostrarNombre("Leo");
mostrarNombre();