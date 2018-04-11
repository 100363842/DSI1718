import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the Pag3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag3',
  templateUrl: 'pag3.html',
})
export class Pag3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pag3Page');
  }
  
  irPagAnterior()
  {
	  this.navCtrl.pop();
  }
   
  irHome()
  {
	  this.navCtrl.setRoot(HomePage);
  }

}
