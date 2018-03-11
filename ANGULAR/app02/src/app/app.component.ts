import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Aplicación ANGULAR - Ejemplo 2';
  
  public txtNombre:string="Pepe";
  public txtApellidos:string="Martin Manso";
  
  private colores:Array<[string,number]>=[['verde',0],['rojo',1],['azul',2]];
  public cod_color:string='verde';
  public cod_color2=0;
  
  public lineas=['Esto es una linea prueba'];
  
  public addLinea()
  {
	  this.lineas.push('Linea de ejemplo '+(this.lineas.length+1));
  }
  
  public delLinea(i)
  {
	  this.lineas.splice(i,1);
  }
}
