import { Component,Input } from '@angular/core';

@Component({
  selector: 'tarjeta-visita',
  templateUrl: './app.component_tarjeta_visita.html',
  styleUrls: ['./app.component.css']
})


export class TarjetaVisita {
  @Input() public nombre:string;
  @Input() public email:string;
  @Input() public telefono:string;
   

   @Input()
    public set name2(nombre: string) {
      this.nombre = nombre;
  }
}
