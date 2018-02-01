import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent  implements OnInit {

  ngOnInit() {
    // console.log('Generando uuids ...');
    // for(let i = 0; i< 200; i++){
    //   console.log(UUID.UUID());
    // }
  }
}
