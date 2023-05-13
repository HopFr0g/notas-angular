# Fundamentos


## Flujo de una aplicación en Angular

- El archivo **src/main.ts** se utiliza el método **bootstrapModule()** para levantar el módulo principal AppModule. Dicha clase AppModule se encuentra en **src/app/app.module.ts**
- En la clase AppModule, buscaremos el parámetro **bootstrap** donde se definen todos los componentes que levanta este módulo. En nuestro caso es el componente AppComponent, que se encuentra en **src/app/app.component.ts**
- En la clase AppComponent se define el nombre del **selector** para incluir el componente en nuestro **index.html**, el nombre de los archivos con el código, los atributos que se pueden referenciar luego, etc...


## Crear un nuevo componente (manualmente):

- Ir a **src/app** y crear una nueva carpeta con el nombre del componente, por ejemplo, **personas**.
- Crear el archivo donde irá la clase de TypeScript del componente. El archivo se llamará **personas.component.ts** y la clase será **PersonasComponent**. Para este paso también se creará el archivo HTML **personas.component.html**
- Luego ir al módulo donde deseamos utilizar nuestro componente. Por ejemplo, AppModule.
- Ya será posible incluir nuestro componente **app-personas** dentro del código HTML del componente principal, **app.component.html**


## Crear un nuevo componente (CLI):

- Desde una terminal en la carpeta de nuestro proyecto Angular, podemos crear un componente con **ng generate component {nombre del componente}**. Se puede resumir del siguiente modo: **ng g c {nombre del componente}**
- El componente se creará en la carpeta **src/app/{nombre del componente}** y se lo declarará automáticamente en el módulo principal AppModule.
- Este componente ya está listo para referenciarse dentro de otros componentes. Por ejemplo, se creará el componente **persona** y se utilizará el elemento HTML **app-persona** dentro de **src/personas/personas.component.html** (ya tenemos **personas** y **persona**).


## InLine components:

- En la clase donde se define un componente, por ejemplo, en **SaludoComponent** ubicado en **src/app/saludo/saludo.component.ts** se puede agregar **directamente el código HTML o CSS en el mismo archivo TypeScript** en lugar de referenciar archivos HTML o CSS separados.
- A la hora de crear un componente mediante **CLI**, podemos agregar el parámetro **-s para que los estilos sean in line** y **-t para que el HTML sea in line**.


## Instalación de Bootstrap:

- Con una terminal situada en la carpeta de nuestro proyecto Angular, debemos instalar bootstrap con **npm install bootstrap --save**.
- Configuramos bootstrap dentro de nuestra aplicación de Angular. En la raíz del proyecto, buscamos el archivo **angular.json**. En el atributo **styles** agregamos **node_modules/bootstrap/dist/css/bootstrap.min.css**. En **scripts** agregamos **node_modules/bootstrap/dist/js/bootstrap.min.js**
- A modo de ejemplo, se utilizan clases de Bootstrap en **src/app/persona/persona.component.html**