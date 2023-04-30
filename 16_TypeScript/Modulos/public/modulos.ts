// Para desplegar este proyecto en un servidor local y poder cargar los módulos correctamente,
// instalamos webpack con el comando "npm install webpack webpack-cli webpack-dev-server"

// Para cargar las clases se necesita installar typescript loader
// con el comando "npm install typescript ts-loader --save-dev"

// En el archivo package.json de npm, agregamos el script "start" cuyo comando es "webpack-dev-server --mode development"

// En el archivo package.json, la propiedad "main" debe ser "public/modulos.js"
// Moveremos nuestro index.html, nuestros archivos .ts y .js a una carpeta "public" dentro de este proyecto

// Agregamos el archivo webpack.config.js

// Corremos el script previamente creado para iniciar el servidor "npm start"

// Para importar una clase de otro módulo, utilizamos "import {nombre de la clase} from {path archivo, sin extensión}":
import {Persona} from "./persona";

let leonel : Persona = new Persona("Leonel");

console.log(leonel.getNombre());