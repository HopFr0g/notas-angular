import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: "./calculadora.component.html",
  styles: [
  ]
})
export class CalculadoraComponent {
  public elemento1 : number;
  public elemento2 : number;
  public resultado : number;
  
  public constructor () {
    this.elemento1 = 0;
    this.elemento2 = 0;
    this.resultado = 0;
  }
  
  public actualizarResultado = () : void => {
    this.resultado = this.elemento1 + this.elemento2;
  }
}