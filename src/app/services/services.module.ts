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
    AngularFireModule.initializeApp(environment.firebase),
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
