import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { User } from '../interfaces/index';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApplicationService {

  current_user: User = null;
  userState: Observable<firebase.User>;
  owner:string = 'Omar Lee Paba ching';

  public breadcrumb:boolean = true

  constructor(
    public _afAuth: AngularFireAuth,
    private router: Router
    ) {
      this.userState = this._afAuth.authState;
      this._afAuth.authState.subscribe(user => {
        if(user != null) {
          // console.info('Asignando datos al Usuario');
          this.current_user = {
            id: '',
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            avatar: user.photoURL
          }
          // console.info('User Authenticated, redirect to Dashboard');
          //this.router.navigate(["/inicio"]);
        } else {
          // console.warn('User not Authenticated, redirect to Login');
          this.router.navigate(["/login"]);
        }
      });
    }


  login(provider:string) {
    let providerAuth:any = null;
    if(provider=='google') {
      providerAuth = new firebase.auth.GoogleAuthProvider();
    } else if(provider=='facebook') {
      providerAuth = new firebase.auth.FacebookAuthProvider();
    } else if(provider=='twitter') {
      providerAuth = new firebase.auth.TwitterAuthProvider();
    }
    if(providerAuth != null) {
      this._afAuth.auth.signInWithPopup(providerAuth);
    }
    return false;
  }

  logout() {
    this.current_user = null;
    this._afAuth.auth.signOut();
  }

}
