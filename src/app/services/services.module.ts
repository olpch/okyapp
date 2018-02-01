import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// servicios
import { ApplicationService } from './application.service';
import { StorageService } from './storage.service';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAjfSu6MLvcQNyv2enFPqYcOF_F37pM0FY",
      authDomain: "okyapp-e551f.firebaseapp.com",
      databaseURL: "https://okyapp-e551f.firebaseio.com",
      projectId: "okyapp-e551f",
      storageBucket: "okyapp-e551f.appspot.com",
      messagingSenderId: "893015799504"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [
    ApplicationService,
    StorageService
  ]
})
export class ServicesModule { }
