import { Component,Input } from '@angular/core';
import { TarjetaVisita } from './TarjetaVisita.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion ANGULAR - Ejemplo 1';
 
  
  contactos=[['Juan','juan@uc3m.es','91-111.11.11'],
			['Maria','maria@uc3m.es','91-222.22.22'],
			['Pepe','','91-333.33.33']];


}

