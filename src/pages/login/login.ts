import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';



import {user} from '../../models/user';
import {ToastService} from '../../services/toast.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user : user = {
    email: '',
    password: ''
  };

  unsuccessful = false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
    private afAuth: AngularFireAuth,
  private toast:ToastService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user:user) {

    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      if (result) {
        this.toast.show("Login Successgul");
        this.navCtrl.setRoot('HomePage', {user: user});
      }else{
        this.unsuccessful = true;
      }
    }catch(e){
      this.unsuccessful = true;
      console.error(e);
    }
      //this.userList$.subscribe();
      
      //this.navCtrl.push('HomePage');
  }

}
