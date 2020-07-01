import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore";

import { AngularFireAuth } from '@angular/fire/auth';
import { SignupPage } from '../pages/signup/signup';

export interface Signup {
  id?: string;
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _angularFireAuth: AngularFireAuth) {}

    signup(credentials:Signup) : Promise<any>{
    return this._angularFireAuth
    .auth
    .signInWithEmailAndPassword(
      credentials.username,
      credentials.password
    );
    
   }
}
