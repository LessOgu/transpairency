import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';

import {ToastService} from '../../services/toast.service';
import {user} from '../../models/user';
/**
 * Generated class for the CreateaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html',
})
export class CreateaccountPage {

  user : user = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private afAuth : AngularFireAuth,
  private toast:ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateaccountPage');
  }


  async register(user: user){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if(result){
        this.toast.show("User has been registered.");
        this.navCtrl.setRoot('LoginPage');
      }
    }catch(e){
      console.error(e);
    }
  }

  
}
