import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elementos-basicos';
  
  // Variables utilizadas para incluir texto dinámico en
  // el documento HTML (interpolación de texto):
  public nombre : string = "Leonel";
  
  // No se puede referenciar atributos que son privados:
  private edad : number = 23;
  
  // Además de referenciar variables en el documento HTML
  // es posible llamar a métodos definidos en la clase del componente
  // Por ejemplo, un getter que devuelve el atributo privado:
  public getEdad = () : number => {
    return this.edad;
  }
  
  // Método utilizado para darle valor a una propiedad en el HTML (property binding):
  public minutoIsImpar = () : boolean => {
    const fechaActual : Date = new Date();
    const minutoActual : number = fechaActual.getMinutes();
    const esImpar : boolean = (minutoActual % 2) == 1;
    
    return esImpar;
  }
  
  // Atributo y método utilizados para un ejemplo de event binding:
  public numeroAleatorio : number = 0;
  
  public generarNumero = () : void => {
    this.numeroAleatorio = Math.trunc(Math.random() * 1000);
  }
  
  // Ejemplo de event binding donde se recibe como parámetro una variable Event:
  public texto : string = "";
  
  public actualizarTexto = (event : Event) : void => {
    this.texto = (<HTMLInputElement>event.target).value;
  }
  
  // Ejemplo de two-way binding:
  public titulo : string = "Título inicial, para demostrar que el input toma el valor del atributo";
}