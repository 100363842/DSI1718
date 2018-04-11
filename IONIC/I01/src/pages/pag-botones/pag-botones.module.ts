import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagBotonesPage } from './pag-botones';
//import { AppModule } from '../../app/app.module';

@NgModule({
  declarations: [
    PagBotonesPage
  ],
  imports: [
    IonicPageModule.forChild(PagBotonesPage)
  ]
})
export class PagBotonesPageModule {}
