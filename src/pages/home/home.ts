import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';



import {user} from '../../models/user';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  user: user = {
    email:'any',
    password:'any'
  }

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public actionSheetCtrl: ActionSheetController) {

    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log(this.user);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Options',
      buttons: [
        {
          text: 'Account',
          role: 'Manage your account',
          handler: () => {
            console.log('Account clicked');
          }
        },{
          text: 'Messages',
          handler: () => {
            console.log('Messages clicked');
          }
        },{
          text: 'About',
          role: 'About',
          handler: () => {
            console.log('About clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
