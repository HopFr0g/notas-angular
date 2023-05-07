import { Component } from '@angular/core';

// Aquí se declara la clase AppComponent de TypeScript
// para configurar el componente principal app-root

@Component({
  selector: 'app-root', // Nombre del elemento que se usará en index.html para incrustar este componente
  templateUrl: './app.component.html', // Nombre de la plantilla HTML del componente
  styleUrls: ['./app.component.css'] // Nombre de las hojas de estilo CSS que se utilizan en este componente
})
export class AppComponent {
  // Los atributos de esta clase se podrán referenciar en el HTML de nuestro componente
  // entre llaves, por ejemplo {{title}}, para obtener el valor de los mismos.
  title = 'Mi primera app en Angular';
}
