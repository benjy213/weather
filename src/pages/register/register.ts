import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	
	user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth) {
  }

  async register(user:User) {
  	try {
  		const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (result)
      this.navCtrl.push(LoginPage);
  	}
  	catch (e) {
  		console.error(e);
  	}
  }
}
