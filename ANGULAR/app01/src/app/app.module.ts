import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Input } from '@angular/core';


import { AppComponent } from './app.component';
import { TarjetaVisita } from './TarjetaVisita.component';



@NgModule({
  declarations: [
    AppComponent,
	TarjetaVisita
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	
 
}
