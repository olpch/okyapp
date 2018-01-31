import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { User } from '../interfaces/user.interface';

@Injectable()
export class StorageService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public filter:string = '10000';

  constructor(
    private _afs: AngularFirestore
  ) {}

  find(table:string, uuid:string) {
    this.itemsCollection = this._afs.collection<any>(table, ref => ref.where('id','==', uuid) );
    return this.itemsCollection.valueChanges();
  }

  all(table:string) {
    this.itemsCollection = this._afs.collection<any>(table);
    return this.itemsCollection.valueChanges();
  }
  saveUsers() {
    let usr: User;
    // this.itemsCollection
  }

}
