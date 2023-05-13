import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { SaludoComponent } from './saludo/saludo.component';

// El decorador @NgModule permite convertir una clase en un módulo de ángular
// y permite definirle datos extra.
@NgModule({
  // El parámetro "declarations" importa los componentes que se utilizarán:
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // El parámetro "bootstrap" indica los componentes que se levantarán cuando se levante este módulo
  bootstrap: [AppComponent]
})
export class AppModule { }
