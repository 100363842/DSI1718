import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public _items:String[]=['aaa','bbbx','ccxc'];
  public items:String[];

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
		this.items=this._items;
  }

  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  
  getItems(ev) {
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this._items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  openPage(pagina)
  {
	  this.navCtrl.push(pagina);
  }
  
  
}
