# Elementos Básicos


## Interpolación con Angular

- La interpolación de texto permite incluir cadenas de texto dinámicas en una plantilla HTML. Permite, por ejemplo, incluir un saludo con el nombre de usuario.
- Se logra con la sintaxis de {{ doble llave }}. En el interior de las llaves, se agrega la variable o expresión cuyo valor queremos desplegar en la plantilla HTML.
- En la clase del componente principal, AppComponent, se incluyen variables que luego se referencian en **src/app.component.html**


## Template Reference Variable

- En Angular, una **template** es una sección de HTML. Se puede incluir un **#nombre** dentro de un elemento HTML para, luego, hacer referencia a dicha **template variable**
- **Template Reference Variable** es un tipo de interpolación donde un elemento HTML puede hacer referencia al valor almacenado en otro elemento HTML.
- En el documento HTML de nuestro componente principal, **src/app.component.html** se observa un ejemplo explicado.


## Property binding []:

- **Property binding** permite asignarle propiedades a los elementos HTML. Estas propiedades son dinámicas, ya que toman su valor de un atributo o método del componente.
- Las **propiedades de Angular** se especifican **con corchetes** dentro de un elemento HTML con la siguiente sintaxis: **[propiedad]="expresión que retorna o referencia un valor"**. Algunas propiedades son **src**, **disabled**, etc.
- En el documento HTML de nuestro componente principal, **src/app.component.html** se observa un ejemplo explicado.


## Event binding ():

- **Event binding** permite escuchar los eventos de nuestros componentes HTML y responder.
- Los **eventos de Angular** se especifican **con paréntesis** dentro de un elemento HTML con la siguiente sintaxis: **(nombre del evento)="expresión que retorna o referencia un valor"**. Algunos eventos son **click**, **input**, etc.
- En el documento HTML de nuestro componente principal, **src/app.component.html** se observa un ejemplo explicado.


## Two-way binding [()]:

- Es una forma de compartir información entre la clase del componente y su plantilla HTML.
- Es necesario agregar a la clase del módulo, en este caso **AppModule** el **import** de **FormsModule**
- Permite modificar propiedades (**property binding**) a la vez que se captura un evento (**event binding**)
- Su sintaxis es **[(ngModel)]="propiedad del modelo"**. Donde **ngModel** es una directiva de formularios y en **propiedad del modelo** se especifica el valor del atirbuto que queremos asociar con este componente. Su función es **cambiar el valor del atributo en el componente cuando el input es modificado y vice versa**
- En el documento HTML de nuestro componente principal, **src/app.component.html** se observa un ejemplo explicado.