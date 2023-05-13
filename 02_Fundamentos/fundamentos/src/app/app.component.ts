import { Component } from '@angular/core';

// El decorador @Component permite convertir una clase en un componente de Angular.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundamentos';
  author = 'Leonel';
}
