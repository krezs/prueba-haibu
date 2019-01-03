import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masinfo',
  templateUrl: 'masinfo.html',
})
export class MasinfoPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item= navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasinfoPage');
  }

}
