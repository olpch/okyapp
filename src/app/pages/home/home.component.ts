import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  users: any[];

  constructor(
    public _db: StorageService
  ) {
    // _db.loadUsers().subscribe( (resp:any) => {
    //   this.users = resp;
    // });
  }

  ngOnInit() {
  }

}
