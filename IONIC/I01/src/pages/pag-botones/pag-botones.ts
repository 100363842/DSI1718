import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';

/**
 * Generated class for the PagBotonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-botones',
  templateUrl: 'pag-botones.html',
})
export class PagBotonesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagBotonesPage');
  }
  
  irPagAnterior()
  {
	  this.navCtrl.pop();
  }
  
  irPagSiguiente()
  {
	  this.navCtrl.push('CardsPage');
  }
  
  irHome()
  {
	  this.navCtrl.setRoot(HomePage);
  }

}
